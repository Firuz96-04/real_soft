<template>
  <div class="my_modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Добавить Студента</h5>
          <button
            @click="closeModal"
            class="btn-close"></button>
        </div>

        <div class="modal-body">
            <form @submit.prevent="addStatement" >
              <div class="mb-3">
                  <label for="full_name" class="form-label-sm">F.I.O</label>
                  <input class="form-control form-control-sm" v-model="statement_obj.full_name" type="text">
              </div>
              <div class="my_row"> 
                  <div class="col-auto">
                      <label for="passport" class="form-label-sm">Паспорт</label>
                      <div class="my_row"> 
                      <input class="form-control form-control-sm pass_seria" maxlength="2" v-model="statement_obj.passport_number" type="text">
                      <input class="form-control form-control-sm pass_nomer" maxlength="7"  v-model="statement_obj.passport_seria" type="text">
                      </div>
                  </div>
                     <div class="col-auto">
                  <label for="exampleFormControlInput1" class="form-label-sm">Дата рождение</label>
                    <input class="form-control form-control-sm" type="date" v-model="statement_obj.born">
             
              </div>
              </div>
               <div class="mb-3">
                      <label for="passport" class="form-label-sm">Телефон</label>
                        <input class="form-control form-control-sm" v-model="statement_obj.phone" type="text">
                  </div>
              <div class="my_row"> 
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label-sm">Регион</label>
                    <select class="form-select form-select-sm" v-model="statement_obj.region" >
                      <option selected>выберите регион</option>
                      <option v-for="(item, index) in getRegions" :key="index" :value="item.id">{{item.name}}</option>
                    </select>
                </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label-sm">Город</label>
                    <select class="form-select form-select-sm" v-model="statement_obj.city" aria-label=".form-select-sm example">
                      <option selected>выберите город</option>
                      <option v-for="(item, index) in getcities" :key="index" :value="item.id">{{item.name}}</option>
                    </select>
                </div>
              </div>       
              <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label-sm">Тип учебы</label>
                   <select class="form-select form-select-sm" v-model="statement_obj.type_study"  aria-label=".form-select-sm example">
                    <option selected>выберите тип учебы</option>
                    <option v-for="(item, index) in getType_studies" :key="index" :value="item.id">{{item.name}}</option>
                  </select>
              </div>
              <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label-sm">Комментарии</label>
                  <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1"
                   v-model="statement_obj.comment" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <label for="formFileSm" class="form-label">Сертификат</label>
                <input class="form-control form-control-sm" id="formFileSm"
                   ref="file" @change="selectImage" type="file">
          </div>
            <div class="my_btn_style">
                <button  class="btn btn-primary">Добавить</button>
            </div>
            </form>
        </div>
        <div class="modal-footer">
          <!-- <button
            class="btn btn-secondary"
            data-bs-dismiss="modal">
            Close
          </button> -->
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  emits:["close"],
  data() {
    return {
        statement_obj :{
          full_name:'',
          passport_number:'',
          passport_seria:'',
          born:'',
          region:'',
          city: '',
          type_study:'',
          phone:'',
          comment:'',
          certificate:'',
        }
    }
  },

  methods:{
    ...mapActions('statement',['add_statement']),
    selectImage() {
       this.statement_obj.certificate = this.$refs.file.files[0]
    },
    closeModal() {
      this.$emit('close')
      let arr_obj = Object.keys(this.statement_obj)
      arr_obj.map((item) => {
        this.statement_obj[item] = ''
      })
    },
    
    addStatement() {
      let newFormDate = new FormData()
      newFormDate.append('full_name', this.statement_obj.full_name)
      newFormDate.append('passport', this.statement_obj.passport_seria+ this.statement_obj.passport_number)
      newFormDate.append('born', this.statement_obj.born)
      newFormDate.append('region', this.statement_obj.region)
      newFormDate.append('city', this.statement_obj.city)  
      newFormDate.append('type_study', this.statement_obj.type_study)
      newFormDate.append('phone', this.statement_obj.phone)
      newFormDate.append('comment', this.statement_obj.comment)
      newFormDate.append('certificate', this.statement_obj.certificate)

      this.add_statement({
        obj: newFormDate,
        cb: this.closeModal

        })
      // console.log(this.statement)
    }
  },
    computed: {
    // ...mapGetters("statement", ["getStatements"]),
    ...mapGetters("city", ["getcities"]),
    ...mapGetters("region", ["getRegions"]),
    ...mapGetters("type_study", ["getType_studies"]),
    
  },


};
</script>

<style scoped>
.my_modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  /* padding-top: 100px;  */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 40%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.my_btn_style{
  display: flex;
  justify-content: flex-end;
}
.my_row {
  display: flex;
  justify-content: space-between;
}
.pass_seria{
  width: 50px;
  margin-right: 15px;
}
.pass_nomer{
  width: 150px;
}
</style>
