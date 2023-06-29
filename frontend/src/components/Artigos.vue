<template>
    <div class="card">
        <div class="post"
            v-for="artigo in artigos"
            v-bind:key="artigo.id">
            <h3> {{ artigo.content }}</h3>
            <p></p>
        </div>
    </div>
</template>

<script>
import api from "../service/api"

export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Artigos',
    data(){
        return{
            artigos: [],
            artigo:{
                id:'',
                content:'',
            },
            editar: false
            }
        },
        methods: {
            obterArtigos(){
                api.get("posts")
                .then(res => {
                    this.artigos = res.data.data;
                })
                .catch(err => console.log(err))
            }
            },
            created(){
                this.obterArtigos()
            }
        }
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 .card{
   background-color: #fff;
   color: #333;
 }
.hello{
  color: #333;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}
 .post{
   border:1px solid silver;
   padding: 10px;
   margin-top: 10px;
   text-align: left;
 }

 .danger{
   color: #fff;
   background: red;
   padding: 5px;
   margin-top: 5px;
 }

.info{
  color: #fff;
  background: blue;
  padding: 5px;
  margin-top: 5px;
}
.success{
  color: #fff;
  background: green;
  padding: 15px;
  border: 1px solid #333;
}
.primary{
  color: #333;
  background: cyan;
  padding: 15px;
  border: 1px solid #333;
}
</style>