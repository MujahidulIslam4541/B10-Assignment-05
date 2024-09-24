
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}

function getInnerTex(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function getMainBalanceById(id) {
    return parseFloat(document.getElementById(id).innerText);
}


// donation  button
const donationButton = document.getElementById('donation-btn');
const historyButton = document.getElementById('history-btn');

donationButton.addEventListener('click', function () {
    donationButton.classList.add("bg-[#B4F461]", "font-semibold");

    historyButton.classList.remove("bg-[#B4F461]", "font-semibold")

    document.getElementById('main-section').classList.remove('hidden');

    document.getElementById('Donation-history').classList.add('hidden')
});


// history button
historyButton.addEventListener('click', function () {
    historyButton.classList.add("bg-[#B4F461]", "font-semibold");

    donationButton.classList.remove("bg-[#B4F461]", "font-semibold");

    document.getElementById('main-section').classList.add('hidden');

    document.getElementById('Donation-history').classList.remove('hidden')
});



// Noakhali section

const noakhaliDonate = document.getElementById('noakhali-donate-btn')
    .addEventListener('click', function () {



        const noakhaliInput = getInputValue('noakhali-donate-input');

        const totalDonateAmount = getInnerTex('donate-inner-text');
        const donate = noakhaliInput + totalDonateAmount;


        const mainBalance = getMainBalanceById('nav-amount');
        const updateBalance = mainBalance - noakhaliInput;

        if (noakhaliInput <= 0 ||
            isNaN(noakhaliInput) ||
            noakhaliInput > mainBalance) {
            alert('Your Input Is Invalid! Please try again');
            return;
        };




        document.getElementById('donate-inner-text').innerText = donate;
        document.getElementById('nav-amount').innerText = updateBalance;




        // added history section
        const historyItem = document.createElement('div');
        historyItem.className = "bg-white p-5 mt-3 rounded-md border shadow-lg ";

        historyItem.innerHTML =
            `
        <h1 class="text-black font-bold text-xl">${noakhaliInput} Donate for Flood at Noakhali, Bangladesh</h1>
        <p class="text-xs text-gray-500 font-semibold">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
    `

        const historyContainer = document.getElementById('history-list');

        historyContainer.insertBefore(historyItem, historyContainer.firstChild);

        my_modal_5.showModal();

    });



// feni section
const feniDonete = document.getElementById('feni-input-btn')
    .addEventListener('click', function () {

        const feniInput = getInputValue('feni-input');
        const feniDonation = getInnerTex('donate-inner-text-feni');
        const totalDonateAmount = feniInput + feniDonation;
        const mainBalance = getMainBalanceById('nav-amount');

        const updateBalance = mainBalance - feniInput;


        if (feniInput <= 0 ||
            isNaN(feniInput) ||
            feniInput > mainBalance) {
            alert('Your Input Is Invalid! Please try again');
            return;
        };


        document.getElementById('donate-inner-text-feni').innerText = totalDonateAmount;
        document.getElementById('nav-amount').innerText = updateBalance;


        // added history section
        const historyItem = document.createElement('div');
        historyItem.className = "bg-white p-5 mt-3 rounded-md border shadow-lg ";

        historyItem.innerHTML =
            `
        <h1 class="text-black font-bold text-xl">${feniInput} Donate for Flood Relief in Feni,Bangladesh</h1>
        <p class="text-xs text-gray-500 font-semibold">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
    `

        const historyContainer = document.getElementById('history-list');

        historyContainer.insertBefore(historyItem, historyContainer.firstChild);

    });



// cota movement section
const cotaMovement = document.getElementById('cota-btn')
    .addEventListener('click', function () {
        const cotaInputField = getInputValue('cota-input');
        const cotaDonation = getInnerTex('cota-inner-text');

        const totalCotaDonation = cotaInputField + cotaDonation;

        const mainBalance = getMainBalanceById('nav-amount');
        const updateBalance = mainBalance - cotaInputField;

        if (cotaInputField <= 0 ||
            isNaN(cotaInputField) ||
            cotaInputField > mainBalance) {
            alert('Your Input Is Invalid! Please try again');
            return;
        };

        document.getElementById('cota-inner-text').innerText = totalCotaDonation;
        document.getElementById('nav-amount').innerText = updateBalance;


        // added history section
        const historyItem = document.createElement('div');
        historyItem.className = "bg-white p-5 mt-3 rounded-md border shadow-lg ";

        historyItem.innerHTML =
            `
        <h1 class="text-black font-bold text-xl">${cotaInputField}
        Aid for Injured in the Quota Movement</h1>
        <p class="text-xs text-gray-500 font-semibold">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
    `

        const historyContainer = document.getElementById('history-list');

        historyContainer.insertBefore(historyItem, historyContainer.firstChild);


    });

