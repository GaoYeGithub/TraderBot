var myGame = new WizardOrpheus('', `You're a trader trying to sell your product. You don't have a lot of customers, so you want to keep your customers but also try to sell your product at a good price.`);

myGame.createUserAction({
  name: 'message',
  parameters: ['Product', 'Price', 'Message'],
  howBotShouldHandle: 'Respond to the user'
});

document.getElementById('submit-button').addEventListener('click', function() {
    let productInput = document.getElementById('product-input').value;
    let priceInput = document.getElementById('price-input').value;
    let userInput = document.getElementById('user-input').value;

    let userMessage = `Product: ${productInput}, Price: ${priceInput}, Message: ${userInput}`;

    myGame.message(userMessage);

    addMessageToChat('user', userInput);
    clearInputs();
});

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
    addMessageToChat('bot', data.message);
});

function addMessageToChat(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    document.getElementById('messages').appendChild(messageElement);
}

function clearInputs() {
    document.getElementById('product-input').value = '';
    document.getElementById('price-input').value = '';
    document.getElementById('user-input').value = '';
}
