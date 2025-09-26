let clientWeb = null;

const clientId = "ESP8266" + Math.floor(Math.random() * 900) + 100;

clientWeb = new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId);

clientWeb.connect({
    useSSL: true,
    timeout: 5,
    onSuccess: function(){
        alert(`A conexão com sucesso:) `)
    },
     onFailure: function(){
        alert(`A conexão falhou:( `)
    }
})

function ligarAmarelo(){
    document.getElementById("amerelo").classList.add("amar");

    //fazendo publish no topico (broker)
    const msgAmar = new Paho.MQTT.Message("");
    msgAmar.destinationName = "Led123/luz/acessa"
    clientWeb.send(msgAmar)
}

function desligar() {
    document.getElementById("amarelo").classList.remove("amar");

    let msgAmar = new Paho.MQTT.Message(``);
    msgAmar.destinationName = "Led123/luz/apagada"
    clientWeb.send(msg);
}