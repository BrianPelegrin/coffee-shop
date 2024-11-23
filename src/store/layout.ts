import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

const useLayoutStore = defineStore('layoutStore', () => {
  const modal = ref<boolean>(false)  
  const notification = reactive({
    isSuccess:true,
    message:'',
    show:false,
    cancellationToken:0
  })
  const handleModal = () => modal.value = !modal.value;
  const handleNotification = (message:string, success:boolean = true) =>{

    if(notification.cancellationToken != 0){
      return;
    }

    if(!notification.show){
      notification.show = true;
      notification.message = message;   
      notification.isSuccess = success;   
    }    

    notification.cancellationToken = setTimeout(() => {      
      $reset()   
    }, 2000);

  }

  const $reset = ()=>{
    notification.isSuccess = true;
    notification.show = false;
    notification.message = '';
    notification.cancellationToken = 0   
  }
  return {
    modal,
    notification,
    handleModal,
    handleNotification,
    $reset
  }
})
export default useLayoutStore