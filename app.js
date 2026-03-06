
// toggling tab functionality
document.getElementById('all-tab').addEventListener('click', function() {
    document.getElementById('all-tab').classList.add('btn-secondary');
    document.getElementById('open-tab').classList.remove('btn-secondary');
    document.getElementById('closed-tab').classList.remove('btn-secondary');
})

document.getElementById('open-tab').addEventListener('click', function() {
    document.getElementById('open-tab').classList.add('btn-secondary');
    document.getElementById('all-tab').classList.remove('btn-secondary');
    document.getElementById('closed-tab').classList.remove('btn-secondary');
    
})

document.getElementById('closed-tab').addEventListener('click', function() {
    document.getElementById('closed-tab').classList.add('btn-secondary');
    document.getElementById('all-tab').classList.remove('btn-secondary');
    document.getElementById('open-tab').classList.remove('btn-secondary');
    
})