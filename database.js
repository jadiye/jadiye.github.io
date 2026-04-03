//JavaScript
var options = getOptions();

var chart = new FamilyTree(document.getElementById("tree"), {
    mouseScrool: FamilyTree.none,
    scaleInitial: options.scaleInitial,
    siblingSeparation: 120,
    partnerNodeSeparation: 40,
    partnerChildrenSplitSeparation: 24,
    min: true,
    nodeMouseClick: FamilyTree.action.expandCollapse,
    nodeMouseDbClick: FamilyTree.action.expandCollapse,
    template: 'john',
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img",
    }
});

chart.on('up-click', function(args) {
    const node = args.node || {};
    const nodeId = node.id || args.id;
    if (!nodeId) return;

    const collapsedIds = chart.getCollapsedIds(node);
    if (collapsedIds && collapsedIds.length) {
        chart.expand(nodeId, collapsedIds);
        return;
    }

    const related = args.ids || [];
    if (related.length) {
        chart.collapse(nodeId, related);
    }
});

chart.onExpandCollpaseButtonClick(function(event) {
    console.log('expand/collapse triggered', event);
});

// Image variables for male and female
const maleImg = 'https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/user-man-circle-512.png';
const femaleImg = 'https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/user-woman-circle-512.png';

// Minimal relation model for maintainability
const members = [
    { key: '1', name: 'Ramchandra Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '2', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '3', name: 'Parashram Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '4', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '5', name: 'Gopal Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '6', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '7', name: 'Raghunath Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '8', name: 'Anusayabai Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '9', name: 'Pandharinath Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '10', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '11', name: 'Bulakhi Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '12', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '13', name: 'Vishwanath Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '14', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '15', name: 'Dattatrey Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '16', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '17', name: 'Keshav Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '18', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '19', name: 'Murlidhar Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '20', name: 'Indira Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '21', name: 'Madhukar Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '22', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '23', name: 'Shridhar Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '24', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '25', name: 'Purushottam Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '26', name: 'Prabha Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '27', name: 'Prabhakar Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '28', name: 'Pushpa Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '29', name: 'Ramesh Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '30', name: 'Sunita Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '31', name: 'Sudhakar Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '32', name: 'Aasha Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '33', name: 'Vibhakar Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '35', name: 'Baliram Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '36', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '37', name: 'Anil Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '38', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '39', name: 'Prakash Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '40', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '41', name: 'Dipak Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '42', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '43', name: 'Sunil Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '44', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '45', name: 'Mahesh Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '46', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '47', name: 'Ulhas Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '48', name: 'Jyotsna Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '49', name: 'Chandrakant Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '50', name: 'Ratna Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '51', name: 'Shamkant Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '52', name: 'Shaila Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '53', name: 'Shashikant Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '54', name: 'Rekha Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '55', name: 'Ravi Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '56', name: 'Rakesh Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '57', name: 'Madhuri Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '58', name: 'Atul Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '59', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '60', name: 'Uday Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '61', name: 'Chitra Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '62', name: 'Amol Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '63', name: 'Ashwini Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '64', name: 'Sachin Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '65', name: 'Rashmi Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '66', name: 'Nitin Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '67', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '68', name: 'Amey Jadiye', img: 'https://avatars.githubusercontent.com/u/2662046', title: '', gender: 'male' },
    { key: '69', name: 'Apurva Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '70', name: 'Pradnya Jadiye', img: maleImg, title: '', gender: 'female' },
    { key: '72', name: 'Suraj Jadiye', img: maleImg, title: '', gender: 'male' },
    { key: '73', name: 'Unknown', img: femaleImg, title: '', gender: 'female' },
    { key: '74', name: 'Chandani Jadiye', img: maleImg, title: '', gender: 'female' },
    { key: '75', name: 'Sonali Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '76', name: 'Sayli Jadiye', img: femaleImg, title: '', gender: 'female' },
    { key: '77', name: 'Prakhar Jadiye', img: '/images/prakhar.jpg', title: '', gender: 'male' }
];

const marriages = [
    { a: '1', b: '2' },
    { a: '3', b: '4' },
    { a: '5', b: '6' },
    { a: '7', b: '8' },
    { a: '9', b: '10' },
    { a: '11', b: '12' },
    { a: '13', b: '14' },
    { a: '15', b: '16' },
    { a: '17', b: '18' },
    { a: '19', b: '20' },
    { a: '21', b: '22' },
    { a: '23', b: '24' },
    { a: '25', b: '26' },
    { a: '27', b: '28' },
    { a: '29', b: '30' },
    { a: '31', b: '32' },
    { a: '35', b: '36' },
    { a: '37', b: '38' },
    { a: '39', b: '40' },
    { a: '41', b: '42' },
    { a: '43', b: '44' },
    { a: '45', b: '46' },
    { a: '47', b: '48' },
    { a: '49', b: '50' },
    { a: '51', b: '52' },
    { a: '53', b: '54' },
    { a: '56', b: '57' },
    { a: '58', b: '59' },
    { a: '60', b: '61' },
    { a: '62', b: '63' },
    { a: '64', b: '65' },
    { a: '66', b: '67' },
    { a: '68', b: '69' },
    { a: '72', b: '73' }
];

const parentChild = [
    { father: '1', mother: '2', child: '3' },
    { father: '1', mother: '2', child: '5' },
    { father: '3', mother: '4', child: '7' },
    { father: '3', mother: '4', child: '9' },
    { father: '3', mother: '4', child: '11' },
    { father: '5', mother: '6', child: '13' },
    { father: '7', mother: '8', child: '15' },
    { father: '7', mother: '8', child: '17' },
    { father: '7', mother: '8', child: '19' },
    { father: '7', mother: '8', child: '21' },
    { father: '9', mother: '10', child: '23' },
    { father: '9', mother: '10', child: '25' },
    { father: '9', mother: '10', child: '27' },
    { father: '13', mother: '14', child: '29' },
    { father: '15', mother: '16', child: '31' },
    { father: '15', mother: '16', child: '33' },
    { father: '15', mother: '16', child: '35' },
    { father: '17', mother: '18', child: '37' },
    { father: '17', mother: '18', child: '39' },
    { father: '17', mother: '18', child: '41' },
    { father: '17', mother: '18', child: '43' },
    { father: '17', mother: '18', child: '45' },
    { father: '19', mother: '20', child: '47' },
    { father: '19', mother: '20', child: '49' },
    { father: '19', mother: '20', child: '51' },
    { father: '19', mother: '20', child: '53' },
    { father: '19', mother: '20', child: '55' },
    { father: '29', mother: '30', child: '56' },
    { father: '29', mother: '30', child: '58' },
    { father: '31', mother: '32', child: '60' },
    { father: '31', mother: '32', child: '62' },
    { father: '49', mother: '50', child: '64' },
    { father: '49', mother: '50', child: '66' },
    { father: '51', mother: '52', child: '68' },
    { father: '51', mother: '52', child: '70' },
    { father: '53', mother: '54', child: '72' },
    { father: '53', mother: '54', child: '74' },
    { father: '47', mother: '48', child: '75' },
    { father: '47', mother: '48', child: '76' },
    { father: '68', mother: '69', child: '77' }
];

function buildFamilyTreeNodes() {
    const byKey = new Map();

    members.forEach((m, index) => {
        byKey.set(m.key, {
            id: index + 1,
            name: m.name,
            title: m.title || '',
            img: m.img,
            gender: m.gender,
            pids: [],
            fid: undefined,
            mid: undefined
        });
    });

    marriages.forEach(({ a, b }) => {
        const left = byKey.get(a);
        const right = byKey.get(b);
        if (!left || !right) return;

        if (!left.pids.includes(right.id)) left.pids.push(right.id);
        if (!right.pids.includes(left.id)) right.pids.push(left.id);
    });

    parentChild.forEach(({ father, mother, child }) => {
        const childNode = byKey.get(child);
        const fatherNode = byKey.get(father);
        const motherNode = byKey.get(mother);
        if (!childNode) return;
        if (fatherNode) childNode.fid = fatherNode.id;
        if (motherNode) childNode.mid = motherNode.id;
    });

    return Array.from(byKey.values());
}

chart.load(buildFamilyTreeNodes());

function getOptions(){
    const searchParams = new URLSearchParams(window.location.search);
    var fit = searchParams.get('fit');
    var enableSearch = true;
    var scaleInitial = 1;
    if (fit == 'yes'){
        enableSearch = false;
        scaleInitial = FamilyTree.match.boundary;
    }
    return {enableSearch, scaleInitial};
}