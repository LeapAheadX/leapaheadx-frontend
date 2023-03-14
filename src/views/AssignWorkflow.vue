<template>
    <div class="rounded-4 p-4 mt-4 my-overlay" style="background-color: #0F1726;">
        <div class="row justify-content-between mb-4">
            <h6 class="col-6">Workflow Assignment</h6>
            <button @click="closeForm" type="button" class="col-2 btn btn-danger">Close</button>
        </div>
        <div class="row">
            <div class="col-6">
                <h7 > Select a workflow to be assigned </h7>
                <div >
                    <div class="input-group my-4">
                        <input @keyup="checktext()" class=" form-control" type="text" v-model="uuid" placeholder="Search by Workflow ID">
                    </div>
                    <div class="input-group">
                        <input @keyup="checktext()" class=" form-control" type="text" v-model="searchQuery" placeholder="Search by Workflow Name">
                        <button @click="displayform=!displayform" class="btn btn-light p-1" ><img  src="../assets/images/dropdownIcon.png" height="25"></button>
                    </div>
                    <ul  v-if = " displayform || (filteredItems.length!=0 && searchQuery!='' && searchQuery!=selectValue)" class="bg-white text-dark no-bullets rounded-bottom">
                        <li v-for="item  in filteredItems" :key="item.id" @click="selectItem(item)">{{ item.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="col-6">
                <h7 > Select a Vendor to be assigned </h7>
                <div >
                    <div class="input-group my-4">
                        <input @keyup="vendor_checktext()" class=" form-control" type="text" v-model="vendor_uuid" placeholder="Search by Workflow ID">
                    </div>
                    <div class="input-group">
                        <input @keyup="vendor_checktext()" class=" form-control" type="text" v-model="vendor_searchQuery" placeholder="Search by Workflow Name">
                        <button @click="vendor_displayform=!vendor_displayform" class="btn btn-light p-1" ><img  src="../assets/images/dropdownIcon.png" height="25"></button>
                    </div>
                    <ul  v-if = " vendor_displayform || (vendor_filteredItems.length!=0 && vendor_searchQuery!='' && vendor_searchQuery!=vendor_selectValue)" class="bg-white text-dark no-bullets rounded-bottom">
                        <li v-for="item  in vendor_filteredItems" :key="item.id" @click="vendor_selectItem(item)">{{ item.company}}</li>
                    </ul>
                </div>
            </div>
            <p v-if ="showMessage" :class="textColor" class="text-center mt-2"> {{ message }}</p>
            
        </div>
    </div>


  </template>

<script setup>
import { defineEmits, computed } from 'vue';

import axios from 'axios';
import { ref, onMounted } from 'vue';
const emits = defineEmits(['isClose']);

function closeForm() {
  emits('isClose');
}

const uuid = ref('');
const selectValue  = ref('');
const searchQuery = ref('');
const displayform = ref(false);
const message = ref("message");
const showMessage = ref(false);
const textColor = ref('');
const formData = ref([]);
const vendorData = ref([]);

function checktext(){
    if (searchQuery.value != selectValue.value){
        uuid.value ='';
        selectValue.value = '';
    
    }
    else if(checkformid(uuid.value) && uuid.value != ""){
        selectValue.value = '';
        searchQuery.value='';
        showMessage.value = true;
        message.value = "Invalid UUID";
        textColor.value ="text-danger";
        setTimeout(() => {
        showMessage.value = false;
        message.value = '';
        }, 5000);
    }

    if (!searchQuery.value =='' && filteredItems.value.length==0){
        showMessage.value = true;
        message.value = "Invalid Workflow"
        textColor.value ="text-danger"
        setTimeout(() => {
        showMessage.value = false;
        message.value = '';
        }, 5000);
        return true;
    }
}

function selectItem(item) {
    searchQuery.value = item.name;
    selectValue.value = item.name;
    uuid.value =item.formUuid;
    displayform.value = false;
    showMessage.value = true;
    message.value = "Valid Form Name";
        textColor.value ="text-success"
        setTimeout(() => {
        showMessage.value = false;
        message.value = '';
        }, 5000);

}

function checkformid(inuuid){
    const form = formData.value.find(form => form.formUuid === inuuid);
    if (form){
        searchQuery.value = form.name;
        uuid.value = form.formUuid;
        selectValue.value = form.name;
        showMessage.value = true;
        message.value = "Valid UUID";
        textColor.value ="text-success"
        setTimeout(() => {
        showMessage.value = false;
        message.value = '';
        }, 5000);
    }else{
        
        return true;
    }
}

const filteredItems = computed(() => {
  if (!searchQuery.value) {
    return formData.value;
  }

  return formData.value.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

// Vendor ------------------------------------------------------------------------------------------------------------------------
const vendor_uuid = ref('');
const vendor_selectValue = ref('');
const vendor_searchQuery = ref('');
const vendor_displayform = ref(false);

function vendor_checktext(){
    if (vendor_searchQuery.value != vendor_selectValue.value){
        vendor_uuid.value ='';
        vendor_selectValue.value = '';
    
    }
    else if(vendor_checkformid(vendor_uuid.value) && vendor_uuid.value != ""){
        vendor_selectValue.value = '';
        vendor_searchQuery.value='';
        showMessage.value = true;
        message.value = "Invalid Vendor UUID";
        textColor.value ="text-danger";
        setTimeout(() => {
        showMessage.value = false;
        message.value = '';
        }, 5000);
    }

    if (!searchQuery.value =='' && filteredItems.value.length==0){
        showMessage.value = true;
        message.value = "Invalid Vendor Name"
        textColor.value ="text-danger"
        setTimeout(() => {
        showMessage.value = false;
        message.value = '';
        }, 5000);
        return true;
    }
}

function vendor_selectItem(item) {
    vendor_searchQuery.value = item.company;
    vendor_selectValue.value = item.company;
    vendor_uuid.value =item.vendorUuid;
    vendor_displayform.value = false;
    showMessage.value = true;
    message.value = "Valid Vendor Name";
        textColor.value ="text-success"
        setTimeout(() => {
        showMessage.value = false;
        message.value = '';
        }, 5000);

}

function vendor_checkformid(inuuid){
    const form = vendorData.value.find(form => form.vendorUuid === inuuid);
    if (form){
        vendor_searchQuery.value = form.company;
        vendor_uuid.value = form.vendorUuid;
        vendor_selectValue.value = form.company;
        showMessage.value = true;
        message.value = "Valid UUID";
        textColor.value ="text-success"
        setTimeout(() => {
        showMessage.value = false;
        message.value = '';
        }, 5000);
    }else{
        return true;
    }
}

const vendor_filteredItems = computed(() => {
  if (!vendor_searchQuery.value) {
    return vendorData.value;
  }

  return vendorData.value.filter((item) => {
    return item.company.toLowerCase().includes(vendor_searchQuery.value.toLowerCase());
  });
});

onMounted(async () => {
  const response = await axios.get('http://localhost:8080/api/formWorkflows');
  formData.value = response.data;

  const responsevendor = await axios.get('http://localhost:8080/api/vendors');
  vendorData.value = responsevendor.data;

});

</script>

<style>
.my-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; 
}

ul.no-bullets{
 
    margin: 0;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    left: 0;
    list-style: none;
}
ul{
    height: 150px; overflow-y: scroll;
}

</style>