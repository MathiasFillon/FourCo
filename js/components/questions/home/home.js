angular.module("components")

    .component("home", {

        templateUrl: '/js/components/questions/home/home.html',

        bindings: {
            quest: '<',
        },

        controller: ['QuestionService', 'AuthService', function (QuestionService, AuthService) {



            this.$onInit = () => {
                this.quest = [];
                this.currentPage = 1;
                this.pageSize = 8;
                this.getQuest();
                this.pageChangeHandler();
                console.log(this)
            };
            this.isAuthenticated = AuthService.isAuthenticated();

            this.getQuest = () => {
                QuestionService.getQuestions().then((items) => {
                    this.quest = items.data
                }).catch((err) => { });
            };
           
            // this.nextQuest = () => {
            //     this.currentPage += 1;
            //     this.getQuest(this.currentPage);
            // }

            // this.prevQuest = () => {
            //     this.currentPage -= 1;
            //     this.getQuest(this.currentPage);
            // } page A mettre en paramétre à the getQuest et getQuestions

            this.disconnect = () => {
                AuthService.disconnect();
                this.isAuthenticated = null;
            }

            this.pageChangeHandler = (num) => {
                console.log('quest page changed to ' + num);
            };
        }]
    })
