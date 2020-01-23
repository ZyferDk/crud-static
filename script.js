const vueApp = new Vue({
    el: '#app',

    data: function () {
        return {
            appName: `User Management`,
            author: `DK`,
            users: [
                {
                "id": 1,
                "name": "Orly Salliss",
                "email": "osalliss0@nasa.gov",
                "gender": "Female"
              }, {
                "id": 2,
                "name": "Celle Seide",
                "email": "cseide1@nyu.edu",
                "gender": "Female"
              }, {
                "id": 3,
                "name": "Paloma Leall",
                "email": "pleall2@webnode.com",
                "gender": "Female"
              }, {
                "id": 4,
                "name": "Hestia Beresford",
                "email": "hberesford3@opera.com",
                "gender": "Female"
              }, {
                "id": 5,
                "name": "Montgomery Darwin",
                "email": "mdarwin4@amazon.co.uk",
                "gender": "Male"
              }],
            userUpdate: {},
            genders: [
                'Male', 'Female'
            ],
        }
    },
    // retuern 2 data or lebih
    computed : {
        appTitle(){
            return this.appName + ' by ' + this.author
        }
    },

    // return all function
    methods: {
        edit(user){
            this.userUpdate =  user
        },

        destroy(indexUser){
            const question = confirm('Yakin di hapus')
            if(question){
                this.users.splice(indexUser, 1)
            }
        },
    },
})