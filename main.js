

// browser.topSites.get()
//   .then((sites) => {
//     var div = document.getElementById('site-list');

//     if (!sites.length) {
//       div.innerText = 'No sites returned from the topSites API.';
//       return;
//     }

//     let ul = document.createElement('ul');
//     ul.className = 'list-group';
//     for (let site of sites) {
//       let li = document.createElement('li');
//       li.className = 'list-group-item';
//       let a = document.createElement('a');
//       a.href = site.url;
//       a.innerText = site.title || site.url;
//       li.appendChild(a);
//       ul.appendChild(li);
//     }

//     div.appendChild(ul);
//   });

  // My func
const printItems = (bookmarkItem, indent) => {
  var div = document.getElementById('site-list');
  let ul = document.createElement('ul');
    ul.className = 'list-group';
  if (bookmarkItem.url) {
    let li = document.createElement('li');
      li.className = 'list-group-item';
      let a = document.createElement('a');
      a.href = bookmarkItem.url;
      a.innerText = bookmarkItem.title || bookmarkItem.url;
      li.appendChild(a);
      ul.appendChild(li);
    // console.log(makeIndent(indent) + bookmarkItem.url);
  } else {
    // console.log(makeIndent(indent) + "Folder");
    indent++;
  }
  if (bookmarkItem.children) {
    for (child of bookmarkItem.children) {
      printItems(child, indent);
    }
  }
  indent--;
  div.appendChild(ul);
}

function printTree(bookmarkItems) {
  console.log(bookmarkItems)
  printItems(bookmarkItems[0], 0);
}
  //

  function makeIndent(indentLength) {
    return ".".repeat(indentLength);
  }
  
  function logItems(bookmarkItem, indent) {
    if (bookmarkItem.url) {
      console.log(makeIndent(indent) + bookmarkItem.url);
    } else {
      console.log(makeIndent(indent) + "Folder");
      indent++;
    }
    if (bookmarkItem.children) {
      for (child of bookmarkItem.children) {
        logItems(child, indent);
      }
    }
    indent--;
  }
  
  function logTree(bookmarkItems) {
    
    logItems(bookmarkItems[0], 0);
  }
  
  function onRejected(error) {
    console.log(`An error: ${error}`);
  }
  
  var gettingTree = browser.bookmarks.getTree();
  gettingTree.then(printTree, onRejected);
  