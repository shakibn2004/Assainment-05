// all veriable and arrays
const dialogContainer = document.getElementById('dialog-container');
const issueCards = document.getElementById('issue-cards');
let totalIssues = document.getElementById('total-issues');
const dialog = document.getElementById("myDialog");
const closeBtn = document.getElementById("closeDialog");
const allIssues = []
const openIssues = []
const closedIssues =[]
let activeTab = "all";


// toggling tab functionality
document.getElementById('all-tab').addEventListener('click', function() {
    document.getElementById('search').value = ''
    activeTab = "all"
    document.getElementById('all-tab').classList.add('btn-secondary');
    document.getElementById('open-tab').classList.remove('btn-secondary');
    document.getElementById('closed-tab').classList.remove('btn-secondary');
    renderAllTab()
    totalIssues.innerHTML = issueCards.childNodes.length;
})

document.getElementById('open-tab').addEventListener('click', function() {
    document.getElementById('search').value = ''
    activeTab = "open"
    document.getElementById('open-tab').classList.add('btn-secondary');
    document.getElementById('all-tab').classList.remove('btn-secondary');
    document.getElementById('closed-tab').classList.remove('btn-secondary');
    renderOpenTab()
    totalIssues.innerHTML = issueCards.childNodes.length;
    
})

document.getElementById('closed-tab').addEventListener('click', function() {
    document.getElementById('search').value = ''
    activeTab = "closed"
    document.getElementById('closed-tab').classList.add('btn-secondary');
    document.getElementById('all-tab').classList.remove('btn-secondary');
    document.getElementById('open-tab').classList.remove('btn-secondary');
    renderClosedTab()
    totalIssues.innerHTML = issueCards.childNodes.length;
})


// loading spener
const loader = document.getElementById("loader");

function showLoader(){
  loader.classList.remove("hidden");
}

function hideLoader(){
  loader.classList.add("hidden");
}
hideLoader()



// fetching all isses
async function allIssuesLoad() {
    showLoader()
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();

    data.data.map(item => allIssues.push(item))
    renderAllTab(data)
    hideLoader()

    data.data.forEach(item => {
        if(item.status === 'open') {
            openIssues.push(item)
        } else {
            closedIssues.push(item)
        }
    })
}
allIssuesLoad()


// all tab rendering function
const renderAllTab = () => {
    issueCards.innerHTML = ''

    allIssues.forEach(item => {
        let div = document.createElement('div');
        div.className = 'card p-4 rounded-xl shadow-[0_0_2px_black]/40'
        div.id = `${item.id}`

        if(item.status == 'open') {
            div.classList.add('open-border')
        } else if(item.status == 'closed') {
            div.classList.add('closed-border')
        }

        div.innerHTML = `
            <div class="card-top flex justify-between">
                    <img src="${
                        item.status === 'open'
                            ? './assets/Open-Status.png'
                            : './assets/Closed- Status .png'
                    }" alt="">
                    <h3 id="priority" class="
                    ${
                      item.priority === 'high'
                         ? 'text-red-500'
                        : item.priority === 'medium'
                         ? 'text-yellow-500'
                        : 'text-gray-400'
                    }
                    ">${item.priority.toUpperCase()}</h3>
                </div>
                <h2 class="text-[14px] font-semibold mt-3 mb-2 line-clamp-2">${item.title}</h2>
                <p class="text-[#64748B] text-[12px] mb-3 line-clamp-2">${item.description}</p>
                <div class="bug flex gap-1">
                    <button class="border border-[#EF4444] text-[#EF4444] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-bug"></i> ${item.labels[0]}</button>
                    <button class="${item.labels.length < 2 ?'hidden':'block'} bg-[#FFF8DB] text-[#D97706] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-life-ring"></i> ${item.labels[1]}</button>
                </div>
                <P class="mt-7 mb-2 text-[12px] text-[#64748B]">#1 by ${item.author}</P>
                <p class=" text-[12px] text-[#64748B]">${item.createdAt}</p>
        `
        issueCards.append(div)
        
    });
}


// open tab rendering function
const renderOpenTab = () => {
    issueCards.innerHTML = ''

    openIssues.forEach(item => {
        let div = document.createElement('div');
        div.className = 'card p-4 open-border rounded-xl shadow-[0_0_2px_black]/40'

        div.innerHTML = `
            <div class="card-top flex justify-between">
                    <img src="$./assets/Open-Status.png" alt="">
                    <h3 id="priority" class="
                    ${
                      item.priority === 'high'
                         ? 'text-red-500'
                        : item.priority === 'medium'
                         ? 'text-yellow-500'
                        : 'text-gray-400'
                    }
                    ">${item.priority.toUpperCase()}</h3>
                </div>
                <h2 class="text-[14px] font-semibold mt-3 mb-2 line-clamp-2">${item.title}</h2>
                <p class="text-[#64748B] text-[12px] mb-3 line-clamp-2">${item.description}</p>
                <div class="bug flex gap-1">
                    <button class="border border-[#EF4444] text-[#EF4444] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-bug"></i> BUG</button>
                    <button class="${item.labels.length < 2 ?'hidden':'block'} bg-[#FFF8DB] text-[#D97706] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-life-ring"></i> HELP WANTED</button>
                </div>
                <P class="mt-7 mb-2 text-[12px] text-[#64748B]">#1 by ${item.author}</P>
                <p class=" text-[12px] text-[#64748B]">${item.createdAt}</p>
        `
        issueCards.append(div)
    })
}


// closed tab rendering function 
const renderClosedTab = () => {
    issueCards.innerHTML = ''

    closedIssues.forEach(item => {
        let div = document.createElement('div');
        div.className = 'card p-4 closed-border rounded-xl shadow-[0_0_2px_black]/40'

        div.innerHTML = `
            <div class="card-top flex justify-between">
                    <img src="./assets/Closed- Status .png" alt="">
                    <h3 id="priority" class="
                    ${
                      item.priority === 'high'
                         ? 'text-red-500'
                        : item.priority === 'medium'
                         ? 'text-yellow-500'
                        : 'text-gray-400'
                    }
                    ">${item.priority.toUpperCase()}</h3>
                </div>
                <h2 class="text-[14px] font-semibold mt-3 mb-2 line-clamp-2">${item.title}</h2>
                <p class="text-[#64748B] text-[12px] mb-3 line-clamp-2">${item.description}</p>
                <div class="bug flex gap-1">
                    <button class="border border-[#EF4444] text-[#EF4444] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-bug"></i> BUG</button>
                    <button class="bg-[#FFF8DB] text-[#D97706] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-life-ring"></i> HELP WANTED</button>
                </div>
                <P class="mt-7 mb-2 text-[12px] text-[#64748B]">#1 by ${item.author}</P>
                <p class=" text-[12px] text-[#64748B]">${item.createdAt}</p>
        `
        issueCards.append(div)
    })
}



// fetch indivisual card data
async function indivisualCardData(cardId) {
    showLoader()
  const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${cardId}`);
  const data = await res.json();
  hideLoader()

  renderModal(data.data);
}



// render indivisual data on modal
const renderModal = (data) => {

  dialogContainer.innerHTML = "";

  const dialog = document.createElement("dialog");
  dialog.className = "rounded-lg p-6 m-auto w-[700px]";

  dialog.innerHTML = `
  
  <h2 class="text-2xl font-bold mb-1">${data.title}</h2>
  <div class="flex items-center gap-1">
    <button class="bg-[#00A96E] px-2 py-1 rounded-full text-white text-[12px]">${data.status}</button>
    <i class="fa-solid fa-circle text-[#64748B] text-[6px]"></i>
    <span class=" text-[#64748B] text-[12px]">${data.status} by ${data.author}</span>
    <i class="fa-solid fa-circle text-[#64748B] text-[6px]"></i>
    <span class=" text-[#64748B] text-[12px]">${data.updatedAt}</span>
  </div>
  <div class="bug my-8">
                    <button class="border border-[#EF4444] text-[#EF4444] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-bug"></i> ${data.labels[0]}</button>
                    <button class="bg-[#FFF8DB] text-[#D97706] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-life-ring"></i> ${data.labels[1]}</button>
  </div>
  <p class="text-[16px] text-[#64748B]">${data.description}</p>
  <div class="autor flex gap-2 my-10">
    <div class="start w-[50%] space-y-1">
        <p>Assignee:</p>
        <h2>${data.assignee}</h2>
    </div>

    <div class="end space-y-2">
        <p>Priority:</p>
        <button class="bg-[#EF4444] px-3 py-1 rounded-full text-[12px] text-white">${data.priority}</button>
    </div>
  </div>
  <div class="flex justify-end gap-2">
    <button id="closeDialog" class="px-4 py-2 bg-[#4A00FF] text-white rounded">Close</button>
  </div>

  `;

  dialogContainer.append(dialog);

  dialog.showModal();
};



// card click (event delegation)
issueCards.addEventListener("click", function (event) {

  const card = event.target.closest(".card");

  if (!card) return;

  const cardId = card.id;

  indivisualCardData(cardId);
});



// modal close (event delegation)
dialogContainer.addEventListener("click", function (event) {

  if (event.target.closest("#closeDialog")) {

    const dialog = document.querySelector("dialog");

    dialog.close();

  }

});


// add search functionality
document.getElementById('search').addEventListener('input', function() {
    let searchValue = document.getElementById('search').value;
    if(!searchValue) {
        searchDataLoad("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        return
    } 

        searchDataLoad(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
})

async function searchDataLoad(searchValue) {
    showLoader()
    const res = await fetch(searchValue)
    const data = await res.json()
    hideLoader()
    renderSearch(data)
}


const renderSearch = (data) => {
    issueCards.innerHTML = ''

    data.data.forEach(item => {
        
        if(activeTab === "all") {
            let div = document.createElement('div');
        div.className = 'card p-4 rounded-xl shadow-[0_0_2px_black]/40'
        div.id = `${item.id}`

        if(item.status == 'open') {
            div.classList.add('open-border')
        } else if(item.status == 'closed') {
            div.classList.add('closed-border')
        }

        div.innerHTML = `
            <div class="card-top flex justify-between">
                    <img src="${
                        item.status === 'open'
                            ? './assets/Open-Status.png'
                            : './assets/Closed- Status .png'
                    }" alt="">
                    <h3 id="priority" class="
                    ${
                      item.priority === 'high'
                         ? 'text-red-500'
                        : item.priority === 'medium'
                         ? 'text-yellow-500'
                        : 'text-gray-400'
                    }
                    ">${item.priority.toUpperCase()}</h3>
                </div>
                <h2 class="text-[14px] font-semibold mt-3 mb-2 line-clamp-2">${item.title}</h2>
                <p class="text-[#64748B] text-[12px] mb-3 line-clamp-2">${item.description}</p>
                <div class="bug flex gap-1">
                    <button class="border border-[#EF4444] text-[#EF4444] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-bug"></i> ${item.labels[0]}</button>
                    <button class="${item.labels.length < 2 ?'hidden':'block'} bg-[#FFF8DB] text-[#D97706] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-life-ring"></i> ${item.labels[1]}</button>
                </div>
                <P class="mt-7 mb-2 text-[12px] text-[#64748B]">#1 by ${item.author}</P>
                <p class=" text-[12px] text-[#64748B]">${item.createdAt}</p>
        `
        issueCards.append(div)
        totalIssues.innerHTML = issueCards.childNodes.length;
        }
        else if(activeTab === "open" && item.status === "open") {
            let div = document.createElement('div');
        div.className = 'card p-4 rounded-xl shadow-[0_0_2px_black]/40'
        div.id = `${item.id}`

        if(item.status == 'open') {
            div.classList.add('open-border')
        } else if(item.status == 'closed') {
            div.classList.add('closed-border')
        }

        div.innerHTML = `
            <div class="card-top flex justify-between">
                    <img src="${
                        item.status === 'open'
                            ? './assets/Open-Status.png'
                            : './assets/Closed- Status .png'
                    }" alt="">
                    <h3 id="priority" class="
                    ${
                      item.priority === 'high'
                         ? 'text-red-500'
                        : item.priority === 'medium'
                         ? 'text-yellow-500'
                        : 'text-gray-400'
                    }
                    ">${item.priority.toUpperCase()}</h3>
                </div>
                <h2 class="text-[14px] font-semibold mt-3 mb-2 line-clamp-2">${item.title}</h2>
                <p class="text-[#64748B] text-[12px] mb-3 line-clamp-2">${item.description}</p>
                <div class="bug flex gap-1">
                    <button class="border border-[#EF4444] text-[#EF4444] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-bug"></i> ${item.labels[0]}</button>
                    <button class="${item.labels.length < 2 ?'hidden':'block'} bg-[#FFF8DB] text-[#D97706] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-life-ring"></i> ${item.labels[1]}</button>
                </div>
                <P class="mt-7 mb-2 text-[12px] text-[#64748B]">#1 by ${item.author}</P>
                <p class=" text-[12px] text-[#64748B]">${item.createdAt}</p>
        `
        issueCards.append(div)
        totalIssues.innerHTML = issueCards.childNodes.length;
        }
        else if(activeTab === "closed" && item.status === "closed") {
            let div = document.createElement('div');
        div.className = 'card p-4 rounded-xl shadow-[0_0_2px_black]/40'
        div.id = `${item.id}`

        if(item.status == 'open') {
            div.classList.add('open-border')
        } else if(item.status == 'closed') {
            div.classList.add('closed-border')
        }

        div.innerHTML = `
            <div class="card-top flex justify-between">
                    <img src="${
                        item.status === 'open'
                            ? './assets/Open-Status.png'
                            : './assets/Closed- Status .png'
                    }" alt="">
                    <h3 id="priority" class="
                    ${
                      item.priority === 'high'
                         ? 'text-red-500'
                        : item.priority === 'medium'
                         ? 'text-yellow-500'
                        : 'text-gray-400'
                    }
                    ">${item.priority.toUpperCase()}</h3>
                </div>
                <h2 class="text-[14px] font-semibold mt-3 mb-2 line-clamp-2">${item.title}</h2>
                <p class="text-[#64748B] text-[12px] mb-3 line-clamp-2">${item.description}</p>
                <div class="bug flex gap-1">
                    <button class="border border-[#EF4444] text-[#EF4444] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-bug"></i> ${item.labels[0]}</button>
                    <button class="${item.labels.length < 2 ?'hidden':'block'} bg-[#FFF8DB] text-[#D97706] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-life-ring"></i> ${item.labels[1]}</button>
                </div>
                <P class="mt-7 mb-2 text-[12px] text-[#64748B]">#1 by ${item.author}</P>
                <p class=" text-[12px] text-[#64748B]">${item.createdAt}</p>
        `
        issueCards.append(div)
        totalIssues.innerHTML = issueCards.childNodes.length;
        }
        
    });
}





