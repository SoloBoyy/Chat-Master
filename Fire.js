import firebase from 'firebase'

class Fire {
    constructor()
    {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if(!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyBgsk_xbItwUw6bJL6X2aj4G_XsLvyaFwg",
                authDomain: "chat-a4826.firebaseapp.com",
                databaseURL: "https://chat-a4826.firebaseio.com",
                projectId: "chat-a4826",
                storageBucket: "chat-a4826.appspot.com",
                messagingSenderId: "758996355839",
                appId: "1:758996355839:web:1e2532f6a1ae8c52d29aca",
                measurementId: "G-TZWCXMKMD4"
            });
        }
    };
    
    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user:item.user
            }

            this.db.push(message);
        });
    };

    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)

        return {
            _id, createdAt, text, user
        };
    };


    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off()
    }

    get db()
    {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new Fire();

