<template>
    <div class="addTask flex">
        <div class="addTask__detail-header flex">
            <span class="addTask__title">Редактировать задачу</span>
            <button class="addTask__delete" @click="deleteTask">Удалить</button>
        </div>
        <input type="text" class="input" placeholder="Имя" v-model="name">
        <input type="text" class="input" placeholder="Описание" v-model="description">
        <label for="category">Категория</label><select name="category" id="category" v-model="category" class="addTask__category">
        <option value="Первая">Первая</option>
        <option value="Вторая">Вторая</option>
        <option value="Третья">Третья</option>
    </select>
        <div class="checkbox">
            <input class="custom-checkbox" type="checkbox" id="publish" name="color-1" v-model="publish">
            <label for="publish">Опубликовать?</label>
        </div>
        <div class="radio">
            <input class="custom-radio" type="radio" id="type-1" name="color" value="Личная" v-model="personal">
            <label for="type-1">Личная </label>
        </div>

        <div class="radio">
            <input class="custom-radio" type="radio" id="type-2" name="color" value="Общая" v-model="personal">
            <label for="type-2">Общая</label>
        </div>

        <button @click="saveTask" class="addTask__button">Сохранить</button>
    </div>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex';
    export default {
        name: "Detail",

        props: {
            payload: {
                type: Object,
                default: () => ({})
            }
        },

        data: () => ({
            name: null,
            description: null,
            category: 'Укажите категорию',
            publish: false,
            personal: 'Личная'
        }),

        mounted() {
            let { name, description, category, publish, personal } = this.payload;

            this.name = name;
            this.description = description;
            this.category = category;
            this.publish = publish;
            this.personal = personal;

        },
        
        methods: {
            ...mapActions(['editTask']),
            ...mapMutations('modal', {
                close: 'CLOSE_MODAL',
            }),

            deleteTask(){
                
            },

            async saveTask(){
                const {name, description, category, publish, personal, editTask, close} = this;

                const data = {
                    id: this.payload.id,
                    name,
                    description,
                    category,
                    publish,
                    personal
                };

                await editTask(data);

                close();

            }
            
        }
    }
</script>

<style lang="scss" scoped>
    .addTask {
        flex-direction: column;

        justify-content: flex-start;
        align-items: flex-start;

        width: 400px;
        min-height: 300px;

        background: #fff;

        padding: 10px 20px;
        
        &__detail-header {
            justify-content: space-between;
            flex-direction: row;

            width: 100%;

            margin-bottom: 20px;
        }
        
        &__delete {
            background: red;
            color: white;
            
            border: none;
            outline: none;

            cursor: pointer;

            border-radius: 10px;

            padding: 5px;
        }

        &__title {
            font-size: 18px;
        }

        &__category {
            margin-bottom: 20px;
        }

        &__button {
            width: 100px;
            height: 40px;

            border: 0;

            outline: none;

            color: white;

            cursor: pointer;

            background: $def-background;

            &:hover {
                background: darken($def-background, 20%);
            }
        }
    }
</style>