    const app= new Vue({
        el: '#app',
        data:{
            frutas:[
                {nombre: 'Pera', cantidad: 5},
                {nombre: 'Manzana', cantidad: 10},
                {nombre: 'Sandia', cantidad: 0 }
        ],
        nuevaFruta:'',
        nuevaCantidad:'',
        total: 0,
    },
    methods:{
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: this.nuevaCantidad,
            });
            this.nuevaFruta = ''
            this.nuevaCantidad = ''
        },
    },
    computed:{
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total+= fruta.cantidad;
            }
            return this.total;
        }
    },
    })
