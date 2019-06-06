<template>
    <div class="comments">
        <div class="comments-count">
            <span>{{ numberComments }} commentaires</span>
        </div>
        <div class="comments-form">
            <form role="sendComment" onSubmit="return false;" onkeypress="return event.keyCode != 13;">
                <div class="form-group">
                    <div v-if="this.$data.userOnline">
                        <input type="text" placeholder="Write your comment..." class="form-control" id="comment">
                        <button v-on:click="createComment">SEND</button>
                    </div>
                    <div v-else>
                        <router-link :to="{ name: 'SignIn' }">
                            <input style="cursor:pointer;" type="text" placeholder="Connecte toi pour commenter :" class="form-control">
                            <button v-on:click="createComment"><i class="far fa-paper-plane"></i></button>
                        </router-link>
                    </div>
                    
                </div>
            </form>
        </div>
        <div class="comments-panel">
            <div v-for="(comment,index) in idComments">
                <CommentElement :idComment="comment"></CommentElement>
            </div>
        </div>
    </div>
</template>

<script>
const qs = require('qs')

import CommentElement from "./CommentElement";

export default {
    props: ['idComments'],
    components: {
        CommentElement
    },
     mounted: function() {
       if(this.readCookie("username") !== null) {
            this.$data.userOnline = true;
        }
        else {
            this.$data.userOnline = false;
        }
    },
    methods: {
      createComment: function() {
            let comment = document.getElementById('comment').value;
            let username = this.readCookie('username');
            
            const requestBody = {
                contenu: comment,
                username: username
            }

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            const url = "http://localhost:8282/"+this.idDeal+"/comment";

            let self = this;
            this.axios.post(url, qs.stringify(requestBody), config)
            .then(function(response, vueElem) {
                console.log(response);
            }).catch(function(error) {
            console.log(error);
            });
        },
        readCookie: function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }
    },
    data: function() {
        return {
            commentsIDs: [],
            userOnline: false,
            numberComments: 0
        }
    }
}
</script>

<style>
.comments {
  width: 75%;
  float: left;
  margin-top: 30px;
  display: inline-grid;
  margin-top: 20px;
}

.comments-count {
  width: 100%;
}

.comments-count span {
  float: left;
  font-size: 18px;
  color: #B8B1B1;
}

.comments-form {
  width: 100%;
}

.comments-form .form-control {
  width: 100%;
  float: left;
}

.comments-form .form-group {
  width: 100%;
  position: relative;
}

.comments-form form {
  width: 100%;
}

.comments-panel {
  width: 100%;
  text-align: left;
}

.form-group button {
    position: absolute;
    top: 4px;
    right: 5px;
    background: transparent;
    border: none;
    color: black;
}
</style>

