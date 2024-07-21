function solve(pies, flavor1, flavor2) {
    const startIndex = pies.indexOf(flavor1);
    const endIndex = pies.indexOf(flavor2) + 1;
 return pies.slice(startIndex, endIndex);
}
solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');
console.log('------');
solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie');