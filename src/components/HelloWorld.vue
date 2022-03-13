<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created(){
    //这里的localhost:8081是看你本机运行项目时给出的地址
    this.$axios.get('http://localhost:8081/data/user.json')
        .then(function (response){
          console.log(response);
        })
        .catch(function (error){
          console.log(error);
        })
    //添加请求拦截器
    this.$axios.interceptors.request.use(function (config){
      //在发送请求之前做什么
      return config;
    },function (error){
      //对请求错误做什么
      return Promise.reject(error);
    })

    //添加响应拦截器
    this.$axios.interceptors.response.use(function (response){
      //对响应数据做什么
      return response;
    },function (error){
      //对响应错误做什么
      return Promise.reject(error);
    })
    //保存vue实例，因为在axios中，this指向的是axios而不是vue
    // var that=this;
    // this.$axios.get('/api')
    //   .then(function (response){
    //     that.city=response.data.city
    //     console.log(response)
    //   })
    //   .catch(function (error){
    //     console.log(error)
    //   })
    // this.$axios.all([this.$axios.get('http://localhost:8081/data/user.json'),this.$axios.get('/api')])
    //   .then(this.$axios.spread(function (get1,get2){
    //     //两个请求现在都执行完成
    //     //get1是第一个get请求的响应结果
    //     //get2是第二个get方法请求的响应结果
    //     console.log(get1);
    //     console.log(get2);
    //   }));
    // var instance1=this.$axios.create({
    //   // baseURL:'http://localhost:8081/',
    //   timeout:1000,
    //   headers:{'X-Custom-Header':'foobar'}
    // });
    // instance1.defaults.baseURL='http://localhost:8081/';
    // instance1({
    //   method:'get',
    //   url:'/data/user.json',
    // }).then(function(response){
    //   console.log(response);
    // }).catch(function (error){
    //   console.log(error);
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
