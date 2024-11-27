function exam(input) {
    let index = 0
        let studentNum = Number(input[0]);
        
        let grades2to299 = 0
        let grades3to399 = 0
        let grades4to499 = 0
        let grades5plus = 0
        let gradeCount = 0
        let sum = 0
        
        for (let i = 1; i <= input.length; i++) {
            
            if (input[i] >= 2 && input[i] <= 2.99) {
                grades2to299++
                
            } else if (input[i] >= 3 && input[i] <= 3.99) {
                grades3to399++
                
            } else if (input[i] >= 4 && input[i] <= 4.99) {
                grades4to499++
            } else if (input[i] >= 5 && input[i] <= 6) {
                grades5plus++
            } 
        
        }
        
        for (let i = 1; i <= studentNum; i++) {
            index++
            sum+=Number(input[index])
            }
        console.log(`Top students: ${((grades5plus/studentNum)*100).toFixed(2)}%`);
        console.log(`Between 4.00 and 4.99: ${((grades4to499/studentNum)*100).toFixed(2)}%`);
        console.log(`Between 3.00 and 3.99: ${((grades3to399/studentNum)*100).toFixed(2)}%`);
        console.log(`Fail: ${((grades2to299/studentNum)*100).toFixed(2)}%`)
        console.log (`Average: ${(sum/studentNum).toFixed(2)}`)
        console.log (sum)
    }
    exam(["6","2","3","4","5","6","2.2"])