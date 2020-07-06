<template>
    <div>
        <table class="table table-bordered table-hover" v-show="!booksIsEmpty">
            <thead>
            <tr class="table-dark">
                <td></td>
                <td>ID</td>
                <td>书名</td>
                <td>出版日期</td>
                <td>价格</td>
                <td>数量</td>
                <td>操作</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in books" :key="item.id" :class="{'table-active': item.isChecked}"
                v-bind="item">
                <td @click="reverseChecked(item)">
                    <label>
                        <input type="checkbox" v-model="item.isChecked">
                    </label>
                </td>
                <td @click="reverseChecked(item)">{{item.id}}</td>
                <td @click="reverseChecked(item)">{{item.name}}</td>
                <td @click="reverseChecked(item)">{{item.tdate}}</td>
                <td @click="reverseChecked(item)">{{item.price | formatPrice}}</td>
                <td>
                    <ButtonAdd :item='item' @item-add="add"></ButtonAdd>
                    {{item.count}}
                    <ButtonMinus :item='item' @item-minus="minus"></ButtonMinus>
                </td>
                <!--            <td>-->
                <!--                <button v-on:click="add(item)">+</button>-->
                <!--                {{item.count}}-->
                <!--                <button @click="minus(item)">-</button>-->
                <!--            </td>-->
                <td>
                    <button @click="remove(index)">删除</button>
                </td>
            </tr>
            </tbody>
        </table>
        <h2 v-show="!booksIsEmpty">总价格{{total | formatPrice}}</h2>
        <h2 v-show="booksIsEmpty">购物车为空</h2>
    </div>
</template>

<script>
    import ButtonAdd from "./ButtonAdd";
    import ButtonMinus from "./ButtonMinus";

    export default {
        name: "Cart",
        data() {
            return {
                books: [
                    {isChecked: true, id: 1, price: 80, tdate: '2020-07-01', count: 1, name: 'java从入门到放弃'},
                    {isChecked: false, id: 2, price: 90, tdate: '2020-07-02', count: 1, name: 'Vue从入门到放弃'},
                    {isChecked: false, id: 3, price: 100.01, tdate: '2020-07-03', count: 1, name: 'mysql从入门到放弃'},
                    {isChecked: false, id: 4, price: 70.00, tdate: '2020-07-04', count: 1, name: '什么从入门到放弃'},
                ],
                booksIsEmpty: false,
            }
        },
        methods: {
            reverseChecked: function (item) {
                item.isChecked = !item.isChecked;
            },
            add: function (item) {
                item.count++;
                // console.log(item.count);
            },
            minus: function (item) {
                if (item.count > 0) item.count--;
            },
            remove: function (index) {
                console.log(index);
                this.books.splice(index, 1);
                if (this.books.length < 1) this.booksIsEmpty = true;
            }
        },
        computed: {
            total: function () {
                return this.books.reduce((returnVal, nextItem) => returnVal + nextItem.count * nextItem.price, 0);
            }
        },
        filters: {
            formatPrice: price => '¥' + price.toFixed(2)
        },
        components: {
            ButtonAdd,
            ButtonMinus
        }
    }
</script>

<style scoped>

</style>