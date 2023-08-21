const btn_add = document.querySelector('.btn-add');
let vocabulary = document.querySelector('#vocabulary');
let content_result = document.querySelector('.content-result');
const btn_random = document.querySelector('.btn-random');
let random_result = document.querySelector('.random-result');
const btn_edit = document.querySelector('.btn-edit');
const btn_xoa = document.querySelector('.btn-xoa');
const text_notify = document.querySelector('.text-notify');

getAllVocabulary();
// getTotalVocabulary();

let getRndInteger = (min, max) => 
{
    return Math.floor(Math.random() * (max - min)) + min;
}

btn_add.addEventListener('click', () => {
    if(vocabulary.value.trim() == ''){
        alert("Hãy nhập từ vựng vào")
    }else{
        btn_edit.addEventListener('click', () => {
            if(btn_xoa.disabled == true){
                btn_xoa.disabled = false
            }else{
                btn_xoa.disabled = true
            }
        })
        addVocabulary(vocabulary.value.trim())
        vocabulary.value = ''
    }
});

vocabulary.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn_add.click();
    }
});

btn_random.addEventListener('click', () => {
    getVocabularyDetail()
})

// -----------------------------------------AJAX----------------------------------------
async function addVocabulary(vocabularyName){
    const url = 'addvocabulary.php';
    const data = {vocabularyName : vocabularyName};
    
    try{
        // Buoc 1: Gui request
        const response = await fetch(url, {
            method  : 'POST',
            headers : {
                'Content-Type'  : 'application/json',
                'Accept'        : 'application/json'
            },
            body    : JSON.stringify(data)
        });
        const result = response.json()
        result.then(result => {
            // console.log(result)
            if(result == true){
                text_notify.classList.add('hidden')
            }else{
                text_notify.classList.remove('hidden')
            }
        })
        getAllVocabulary();
    }catch (error) {
        console.error('Đã xảy ra lỗi:', error);
    }
}

async function getAllVocabulary(){
    const url = 'getVocabulary.php';

    //B1: Gui request
    const response = await fetch(url)

    //b2: xu ly ket qua
    const result = await response.json();
    content_result.innerHTML = '';
    result.forEach(element => {
        const product = `
            <div class="flex">
                <input type="checkbox" disabled id="vocabularyCheckbox${element.id}" name="vocabularyCheckbox" class="p-0 m-0 vocabularyCheckbox hidden" value="${element.id}">
                <label for="vocabularyCheckbox${element.id}" class="col-md-12 result p-0 m-0">${element.vocabulary_name}</label>
            </div>    
        `;
        content_result.innerHTML += product;
    });

    const vocabulary_checkbox = document.querySelectorAll('.vocabularyCheckbox');

    btn_edit.addEventListener('click', () => {
        if(btn_xoa.disabled == true){
            btn_xoa.disabled = false
        }else{
            btn_xoa.disabled = true
        }
        vocabulary_checkbox.forEach(e => {
            e.classList.toggle('hidden')
            if(e.disabled == true){
                e.disabled = false
            }else{
                e.disabled = true
            }
        })
    })

    btn_xoa.addEventListener('click', () => {
        const vocabularyCheckbox = document.querySelectorAll("input[name='vocabularyCheckbox']:checked")
    
        const chekedVocabulary = [...vocabularyCheckbox].map(e => e.value);

        vocabulary_checkbox.forEach(e => {
            e.classList.add('hidden')
            e.disabled = true
        })

        btn_xoa.disabled = true
        deleteVocabularys(chekedVocabulary);
        
        btn_edit.addEventListener('click', () => {
            if(btn_xoa.disabled == true){
                btn_xoa.disabled = false
            }else{
                btn_xoa.disabled = true
            }
        })
    })
}

async function deleteVocabularys(arrvocabularyId){
    const url = 'deleteVocabularys.php';
    const data = {vocabularyId : arrvocabularyId};

    //B1: gui request
    await fetch(url, {
        method  : 'POST',
        headers : {
            'Content-Type'  : 'application/json',
            'Accept'        : 'application/json'
        },
        body    : JSON.stringify(data)
    });

    //b2
    getAllVocabulary();
    // getTotalVocabulary();
}

async function deleteVocabulary(vocabularyId){
    const url = 'deleteVocabulary.php';
    const data = {vocabularyId : vocabularyId};

    //B1: gui request
    await fetch(url, {
        method  : 'POST',
        headers : {
            'Content-Type'  : 'application/json',
            'Accept'        : 'application/json'
        },
        body    : JSON.stringify(data)
    });

    //b2
    getAllVocabulary();
}

async function getVocabularyDetail() {
    const url = 'getvocabularydetail.php';

    //B1: Gui request
    const response = await fetch(url)

    //b2: xu ly ket qua
    const result = await response.json();

    const btn_delete_result = document.querySelector('.btn-delete-result')
    if(result.length <= 0){
        random_result.innerHTML = 'Hãy thêm từ vựng vào'
        btn_delete_result.disabled = true
    }else{
        const loading = document.querySelector('.loading')
        loading.classList.remove('hidden')
        btn_delete_result.disabled = true
        random_result.innerHTML = ''
        setTimeout(() => {
            btn_delete_result.disabled = false
            loading.classList.add('hidden')
            result.forEach(element => {
                random_result.innerHTML = ` <h3 class="text-center text-danger vocabulary-detail" data-vocabularyId="${element.id}">${element.vocabulary_name}</h3> `
            });
        }, 1000);
        
        btn_delete_result.addEventListener('click', () => {
            btn_xoa.disabled = true
            deleteVocabulary(document.querySelector('.vocabulary-detail').getAttribute("data-vocabularyId"))
            btn_edit.addEventListener('click', () => {
                if(btn_xoa.disabled == true){
                    btn_xoa.disabled = false
                }else{
                    btn_xoa.disabled = true
                }
            })
        })
    }

}

// async function getTotalVocabulary(){
//     const url = 'getTotalVocabulary.php';

//     const response = await fetch(url)

//     const result = await response.json()

//     btn_random.addEventListener('click', () => {
//         if(result <= 0){
//             random_result.innerHTML = 'Hãy thêm từ vựng vào'
//         }else{
//             getVocabularyDetail()
//         }
//     })
// }