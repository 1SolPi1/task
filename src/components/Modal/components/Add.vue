<template>
    <div class="addTask flex">
        <p class="addTask__title">Новая задача</p>
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

        <button @click="createTask" class="addTask__button">создать</button>
    </div>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex';
    export default {
        name: "Add",

        data: () => ({
            name: null,
            description: null,
            category: 'Укажите категорию',
            publish: false,
            personal: 'Личная'
        }),

        methods: {
            ...mapActions(['addTask']),
            ...mapMutations('modal', {
                close: 'CLOSE_MODAL',
            }),

           async createTask(){
                const {name, description, category, publish, personal, addTask, close} = this;

                const data = {
                    name,
                    description,
                    category,
                    publish,
                    personal
                };

                await addTask(data);

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

    &__title {
        margin-bottom: 20px;
        align-self: center;
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