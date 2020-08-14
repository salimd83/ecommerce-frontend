var tree = document.querySelectorAll('.tree-menu > ul');

for(let i = 0; i < tree.length; i++) {
    let cTree = tree[i];
    let li = cTree.querySelectorAll('.has-child');
    for(let i = 0; i < li.length; i++) {
        li[i].querySelector('a').addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            rmActiveClasses(cTree);
            cTree.classList.add('active');
            e.currentTarget.parentElement.classList.add('active');
        });
        li[i].querySelector('.back a').addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            cTree.classList.remove('active')
            e.currentTarget.parentElement.classList.remove('active')
        })
    }
}

function rmActiveClasses(tree) {
    let act = tree.querySelectorAll('.active');
    for(let i = 0; i < act.length; i++) {
        act[i].classList.remove('active')
    }
}