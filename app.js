// all veriable and arrays
const issueCards = document.getElementById('issue-cards');
let totalIssues = document.getElementById('total-issues');
const allIssues = []
const openIssues = []
const closedIssues =[]


// toggling tab functionality
document.getElementById('all-tab').addEventListener('click', function() {
    document.getElementById('all-tab').classList.add('btn-secondary');
    document.getElementById('open-tab').classList.remove('btn-secondary');
    document.getElementById('closed-tab').classList.remove('btn-secondary');
    renderAllTab()
    totalIssues.innerHTML = allIssues.length;
})

document.getElementById('open-tab').addEventListener('click', function() {
    document.getElementById('open-tab').classList.add('btn-secondary');
    document.getElementById('all-tab').classList.remove('btn-secondary');
    document.getElementById('closed-tab').classList.remove('btn-secondary');
    renderOpenTab()
    totalIssues.innerHTML = openIssues.length;
    
})

document.getElementById('closed-tab').addEventListener('click', function() {
    document.getElementById('closed-tab').classList.add('btn-secondary');
    document.getElementById('all-tab').classList.remove('btn-secondary');
    document.getElementById('open-tab').classList.remove('btn-secondary');
    renderClosedTab()
    totalIssues.innerHTML = closedIssues.length;
    
})


// fetching all isses
async function allIssuesLoad(params) {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();

    data.data.map(item => allIssues.push(item))
    renderAllTab(data)

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
                    <button class="border border-[#EF4444] text-[#EF4444] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-bug"></i> BUG</button>
                    <button class="bg-[#FFF8DB] text-[#D97706] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-life-ring"></i> HELP WANTED</button>
                </div>
                <P class="mt-7 mb-2 text-[12px] text-[#64748B]">#1 by john_doe</P>
                <p class=" text-[12px] text-[#64748B]">1/15/2024</p>
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
                    <button class="bg-[#FFF8DB] text-[#D97706] text-[12px] px-3 py-1 rounded-full"><i class="fa-solid fa-life-ring"></i> HELP WANTED</button>
                </div>
                <P class="mt-7 mb-2 text-[12px] text-[#64748B]">#1 by john_doe</P>
                <p class=" text-[12px] text-[#64748B]">1/15/2024</p>
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
                <P class="mt-7 mb-2 text-[12px] text-[#64748B]">#1 by john_doe</P>
                <p class=" text-[12px] text-[#64748B]">1/15/2024</p>
        `
        issueCards.append(div)
    })
}
