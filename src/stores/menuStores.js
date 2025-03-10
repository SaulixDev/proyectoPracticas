import { defineStore } from "pinia";

export const useMenuStore = defineStore('menu', {
    state: () => ({
        storeId: 0,
        menu: '',
    }),
    actions: {
        changeId(newId){
            console.log(newId)
            this.storeId = newId;
        },

        setMenu(newMenu){
            this.menu = newMenu;
        }
    }
})