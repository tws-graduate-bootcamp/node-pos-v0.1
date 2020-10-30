module.exports = function printInventory(inputs) {
    
    let reducedInput = groupAndProcessInput(inputs);
    let detail = ''
    reducedInput.forEach(element => {
        return detail += generateOneItemInfo(element);
    });

    let total = generateTotalInfo(reducedInput);

    return '***<store earning no money>Receipt ***\n' +
        detail +
        '----------------------\n' +
        total +
        '**********************\n';

        function generateOneItemInfo(item) {
            let result = `Name: ${item.Name}, Quantity: ${item.Quantity}`
            if (item.Unit) {
                result += ` ${item.Unit}`;
            }
            result += `, Unit price: ${Number(item.UnitPrice).toFixed(2)} (yuan), Subtotal: ${Number(item.Total).toFixed(2)} (yuan)\n`;
    
            return result;
        }
    
        function generateTotalInfo(items) {
            let total = items.reduce((sumTotal, current) => {
                sumTotal += current.Total;
                return sumTotal;
            }, 0);
            return `Total: ${Number(total).toFixed(2)} (yuan)\n`;
        }
    
        function groupAndProcessInput(input){
            let processedInput = inputs.reduce((groupInputs, current) => {
                let findItem = groupInputs.find(item => item.Name === current.Name);
        
                if (findItem == null) {
                    findItem = {};
                    findItem.Total = 0;
                    findItem.UnitPrice = current.Price;
                    findItem.Unit = current.Unit === 'bottle' ? 'bottles' : 'a';
                    findItem.Quantity = 0;
                    groupInputs.push(findItem);
                }
        
                findItem.Name = current.Name;
                findItem.Total += current.Price;
                findItem.Quantity++;
        
                return groupInputs;
            }, []);
    
            return processedInput;
        }
};

