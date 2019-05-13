const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {

    describe('repair method', () => {
        it('repair should return durability to 100', () => {

            const repairTest = enhancer.repair({name: 'Dolphin', enhancement: 17, durability: 69})
            
            expect(repairTest).toBeDefined();
            
            expect(repairTest).toStrictEqual({name: 'Dolphin', enhancement: 17, durability: 100})
        })
    })
        
        
        describe('succeed method', () => {
            it('succeed should take an item and return a new item with enhancement + 1', () => {
                const succeedTest = enhancer.succeed({name: 'Dolphin', enhancement: 17, durability: 69})

                expect(succeedTest).toBeDefined();

                expect(succeedTest).toStrictEqual({name: 'Dolphin', enhancement: 18, durability: 69})
            })
            
            it('succeed should take an item with 20 enhancement and return it with 20 enhancement still', () => {
                const twentyMaxEnhancement = enhancer.succeed({name: '20 Max', enhancement: 20, durability: 69})

                expect(twentyMaxEnhancement).toBeDefined();

                expect(twentyMaxEnhancement).toStrictEqual({name: '20 Max', enhancement: 20, durability: 69})
                
            })
        })
        
        
        describe('fail method ', () => {
            it('enhancement less than 15? decrease durability by 5', () => {

            })


            
            it('enhancement is either 15 or 16? reduce durability by 10', () =>{

            })

            

            it('enhancement greater than 16? decrease enhancement by 1 and dura by 10', () => {

            })
        })
        
        
        // describe('', () => {
            
            // })
            
            
            
        })