/* jshint devel:true */
(function() {
	var paragNode = document.querySelector('h4.docs-header');
	var textNode = document.querySelector('h6');
	var picture = document.querySelector('div.seven.columns');
	var info = document.querySelector('div.five.columns');
	function Node(parag, text, leftNode, rightNode) {
		this.leftNode = leftNode;
		this.rightNode = rightNode;
		this.text = text;
		this.parag = parag;
	}

	var UsefulLinks = new Node('Useful links');
	UsefulLinks.text = '<li>If you don\'t understand binary trees now, check another branches.</li><li>However, if this tutorial structure will be graph instead of tree, it be easier.</li><li>Also, there is one interesting <a href="http://cslibrary.stanford.edu/110/BinaryTrees.pdf">book</a> about binary trees with algoritmics and exercises on C++.</li>';

	var FinishCodeOper = new Node('Finish course');
	FinishCodeOper.text = '<li>If you don\'t understand binary trees now, check another branches.</li><li>Also, there is one interesting <a href="http://cslibrary.stanford.edu/110/BinaryTrees.pdf">book</a> about binary trees with algoritmics and exercises written on C++ and Java</li>';

	var FinishOperation = new Node('Recommended recourse');
	FinishOperation.text = 'Now you have base knowledges about binary trees, so I recommend you this <a href="http://shop.oreilly.com/product/9781593275846.do?green=C70CF1AB-62FF-5C12-AF31-47977D1CB293&intcmp=af-mybuy-9781593275846.IP">book</a>, and this <a href="http://shop.oreilly.com/product/0636920029557.do">book</a>, and <a href="http://cslibrary.stanford.edu/110/BinaryTrees.pdf">this</a>.';

	var FinishRec = new Node('Proof your knowledge in practical');
	FinishRec.text = 'Now you have base knowledges about binary trees, so I recommend you <a href="http://cslibrary.stanford.edu/110/BinaryTrees.pdf">this</a> and <a href="http://shop.oreilly.com/product/9780596516246.do">this</a> for improve your Math skills.';


	var AllCode = new Node('Operations cheatsheet');
	AllCode.text = '<li>At first, create object Node, and method Insert, where node - node of tree that will be deleted:</li><pre><code>this.insert = function(node) {\n if(!this.leftNode) {\n  this.leftNode = node\n }\n else if(!this.rightNode) {\n   this.rightNode = node\n }\n else {\n  insert(this.leftNode)\n  insert(this.rightNode)\n } \n}</code></pre>';
	AllCode.text += '<li>We can insert node to current position with Node\'s method insertCurr </li><pre><code> this.insertCurr = function(node, currentNode) {\n  if(this.leftNode.value === currentNode.value) {\n    this.leftNode = currentNode \n  }\n  else if(this.rightNode.value = currentNode.value) {\n   this.rightNode = currentNode\n  }\n  else {\n   insertCurr(this.leftNode)\n   insertCurr(this.rightNode)\n  } \n} </code></pre>';
	AllCode.text += '<li>Search method:</li> <pre><code>this.search = function(node) {\n if(this.leftNode.value === node.value) {\n  return this.leftNode \n }\n else if (this.rightNode.value === node.value) {\n  return this.rightNode \n }\n else {\n  this.leftNode.search(node)\n  this.rightNode.search(this.rightNode, node) \n } \n}</code></pre>';
	AllCode.text += '<li>We can remove elements from tree with deleteNode() method</li>';
	AllCode.text += '<pre><code>this.deleteNode = function (node) {\n if(this.leftNode.value === node.value) {\n   delete this.leftNode \n }\n else if(this.rightNode.value === node.value) {\n  delete this.rightNode\n }\n else {\n  this.leftNode.deleteNode(node)\n  this.rightNode.deleteNode(node)\n }\n}</code></pre>';
	AllCode.rightNode = UsefulLinks;


	var SearchRec = new Node('Operation Search');
	SearchRec.text = '<li>Search method:</li> <pre><code>this.search = function(node) {\n if(this.leftNode.value === node.value) {\n  return this.leftNode \n }\n else if (this.rightNode.value === node.value) {\n  return this.rightNode \n }\n else {\n  this.leftNode.search(node)\n  this.rightNode.search(this.rightNode, node) \n } \n}</code></pre>';
	SearchRec.rightNode = FinishRec;


	var DeleteRec = new Node('Operation Delete');
	DeleteRec.text = '<li>We can remove elements from tree with deleteNode() method</li>';
	DeleteRec.text += '<pre><code>this.deleteNode = function (node) {\n if(this.leftNode.value === node.value) {\n   delete this.leftNode \n }\n else if(this.rightNode.value === node.value) {\n  delete this.rightNode\n }\n else {\n  this.leftNode.deleteNode(node)\n  this.rightNode.deleteNode(node)\n }\n}</code></pre>';
	DeleteRec.rightNode = SearchRec;


	var CodeOper = new Node('Operation in binary trees');
	CodeOper.text = '<ul>There are three operations: <li>Insertion</li><li>Deletion</li><li>Search</li></ul> Operation examples you can find <a href="http://en.wikipedia.org/wiki/Binary_tree">here</a> or in another branch of this tree.';
	CodeOper.leftNode = FinishCodeOper;
	CodeOper.rightNode = AllCode;


	var Operation = new Node('Operation in trees');
	Operation.text = '<ul>There are three operations: <li>Insert node in tree</li><li>Delete node from tree </li><li>Search for node in tree</li></ul> ';
	Operation.rightNode = FinishOperation;

	var OperationRec = new Node('Binary trees operations');
	OperationRec.text = '<li>All operations in binary trees are recursive implemented, cause we rarely know depth of tree and inner tree structure</li>';
	OperationRec.text += '<ul>In work you will use three operations: <li>Insert Node in tree</li><li>Delete Node from tree</li><li>Search for Node in tree</li></ul>\n';
	OperationRec.text += '<li>At first, create object Node, and method Insert, where node - node of tree that will be deleted:</li><pre><code>this.insert = function(node) {\n if(!this.leftNode) {\n  this.leftNode = node\n }\n else if(!this.rightNode) {\n   this.rightNode = node\n }\n else {\n  insert(this.leftNode)\n  insert(this.rightNode)\n } \n}</code></pre>';
	OperationRec.text += '<li>We can insert node to current position with Node\'s method insertCurr </li><pre><code> this.insertCurr = function(node, currentNode) {\n  if(this.leftNode.value === currentNode.value) {\n    this.leftNode = currentNode \n  }\n  else if(this.rightNode.value = currentNode.value) {\n   this.rightNode = currentNode\n  }\n  else {\n   insertCurr(this.leftNode)\n   insertCurr(this.rightNode)\n  } \n} </code></pre>';
	OperationRec.rightNode = DeleteRec;


	var TypeNode = new Node('Types of trees');
	TypeNode.text = '<li>We must remember that binary trees have at most 2 children.</li><li>If graph have more than two childs - it isn\'t binary tree.</li>';
	TypeNode.text += '<ul>There are:<li>Complete trees</li><li>Perfect trees</li><li>Full tress</li>But this knowledge doesn\'t really help you in programming.</ul>';
	TypeNode.rightNode = Operation;
	TypeNode.leftNode = CodeOper;

	var TypeNodeRec = new Node('Types of binary trees');
	TypeNodeRec.text = '<li>We always must remember that binary tree shold have at most two including trees.</li><li>It\'s the most important difference between simple graph and binary tree.</li>';
	TypeNodeRec.rightNode = OperationRec;


	var RecTerminNode = new Node('Recursive Defenition');
	RecTerminNode.text = '<pre><code>Tree ::= ( #Content #Tree #Tree ) | null</code></pre><li>It\'s means that graph(our tree) could be or empty, or include at most two trees.</li><li>Empty tree calls leaf.</li>';
	RecTerminNode.leftNode = TypeNodeRec;

	var TerminNode = new Node('Defenition');
	TerminNode.text = '<li>In computer science, a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.</li><li>Empty childs call leaves of tree.</li>';
	TerminNode.rightNode = TypeNode;


	var root = new Node('Start', 'You\'re programmer and don\'t know binary Trees? Anyway you must know it.<li>Hint: left branch is easier.</li>');
	root.rightNode = TerminNode;
	root.leftNode = RecTerminNode;


	var x = picture.offsetWidth / 2;
	var y = 50;
	var counter = 16;

	function draw(node, x, y, counter) {
		if (node) {

			var nodElem = document.createElement('div');
			nodElem.className = 'circle';
			nodElem.style.top = y + 'px';
			nodElem.style.left = x + 'px';

			picture.appendChild(nodElem);


			if (node.leftNode && node.rightNode) {
				counter -= 2;
				drawLinearLine(x, y, counter, 2);
				draw(node.leftNode, x - 10 * counter, y + 5 * counter, counter);
				draw(node.rightNode, x + 10 * counter, y + 5 * counter, counter);
			} else if (node.leftNode) {
				drawLinearLine(x, y, counter, 1);
				draw(node.leftNode, x, y + 5 * counter, counter);
			} else if (node.rightNode) {
				drawLinearLine(x, y, counter, 1);
				draw(node.rightNode, x, y + 5 * counter, counter);
			}
			nodElem.addEventListener('click', function() {
				parseTemplate(node, nodElem);
			}, false);
			nodElem.addEventListener('mouseover', function() {
				getInfo(node, nodElem);
			}, false);
			nodElem.addEventListener('mouseout', function() {
				clearInfo(node, nodElem);
			}, false);
		}
	}

	function parseTemplate(node, element) {
		info.className = 'five columns'
		var circles = document.querySelectorAll('.circle');
		for (var i = 0; i < circles.length; i++) {
			circles[i].style.backgroundColor = '#222';
		}
		info.style.opacity = '0';
		setTimeout(function() {
			info.className = 'five columns active'
			info.style.opacity = '1'
		}, 100);
		element.className = 'circle active';
		element.style.backgroundColor = 'red';
		paragNode.innerHTML = node.parag;
		textNode.innerHTML = node.text;
	}

	function getInfo(node, nodElem) {
		var elem = document.createElement('span');
		elem.innerText = node.parag;
		nodElem.appendChild(elem);
	}

	function clearInfo(node, nodElem) {
		nodElem.innerHTML = '';
	}

	function drawLinearLine(x, y, counter, num) {
		var line = document.createElement('div');
		line.className = 'line';
		if (num === 1) {
			line.style.top = y + 45 + 'px';
			line.style.left = x - 17 + 'px';
			line.style.width = 5 * counter + 'px';
			line.style.transform = 'rotate(90deg)';
		} else {
			var hip = Math.sqrt(Math.pow(10 * counter, 2) + Math.pow(5 * counter, 2));
			line.style.width = hip + 'px';
			var lineTwo = line.cloneNode(true);
			var deg = Math.acos(10 * counter / hip) * (180 / Math.PI);

			var degTwo = 180 - deg;
			lineTwo.style.transform = 'rotate(' + degTwo + 'deg)';
			lineTwo.style.top = y + 45 + 'px';
			lineTwo.style.left = x - 10 * (counter) + 'px';

			line.style.transform = 'rotate(' + deg + 'deg)';
			line.style.top = y + 45 + 'px';
			line.style.left = x + 10 + 'px';
			picture.appendChild(lineTwo);
		}
		picture.appendChild(line);
	}

	draw(root, x, y, counter);
	parseTemplate(root, document.querySelector('.circle'));
})();