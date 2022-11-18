<template>
  <div class="mt-5">
    <button type="button" class="btn btn-primary" @click="showAddModal">Добавить</button>
    <table class="table table-hover my_class">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ф.И.Ш</th>
          <th scope="col">Паспорт</th>
          <th scope="col">Туғилган сана</th>
          <th scope="col">Вилоят</th>
          <th scope="col">Шаҳар</th>
          <th scope="col">Ўқув йўналиши</th>
          <th scope="col">Телефон</th>
          <th scope="col">Фото</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getStatements" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.full_name }}</td>
          <td>{{ item.passport }}</td>
          <td>{{ item.born }}</td>
          <td>{{ item.region.name }}</td>
          <td>{{ item.city.name }}</td>
          <td>{{ item.type_study.name }}</td>
          <td>{{ item.phone }}</td>
          <td><img   :src="myImage(item.certificate)"  width="50" height="50"/></td>
        </tr>
      </tbody>
    </table>
   
  </div>
  <teleport to="body">
     <add-modal v-show="statementModal"  @close="closeModal"/>
  </teleport>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddModal from '../components/statement/AddModal.vue'
import server_url from '../api/server'
export default {

    components :{
        'add-modal': AddModal
    },
  data() {
    return {
      statementModal:false,
      phone_value:''
    };
  },

  methods: {
    ...mapActions("statement", ["set_statements"]),
    ...mapActions("city", ["set_cities"]),
    ...mapActions("region", ["set_regions"]),
    ...mapActions("type_study", ["set_type_studies"]),
    myOption(e) {
      if (this.phone_value.length > 5) {
        console.log('bolshe')
          this.phone_value.slice(0,5)
      }
      console.log(e)
       console.log(e.key)

    },
      myImage(elem) {
        const str = elem
        console.log(server_url)
        if (str != null) {
            let file_type = str.split('.').pop()
            switch (file_type) {
              case 'jpg':
                  return server_url+elem
              case 'docx':
                return `${server_url}/media/word.jpg`
              case 'pdf':
                 return `${server_url}/media/pdf.jpg`
              default:
                break;
            }
        }
      return `${server_url}/media/default_user.jpg`
      
    },


    showAddModal() {
        this.statementModal = true
    },

    closeModal() {
      console.log('close')
      this.statementModal = false
    }
  },

  computed: {
    ...mapGetters("statement", ["getStatements"]),
    
  },

  mounted() {
    this.set_statements()
    this.set_cities()
    this.set_regions()
    this.set_type_studies()
  },
};
</script>

<style scoped>
.my_class {
  cursor: pointer;
}
</style>
