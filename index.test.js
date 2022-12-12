 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  test('first name shold be patten',()=>{
    expect(testData.firstName).toBe('Patten')
  })
  
  describe('formatTitle tests',()=>{
    test('FOrmat title should be string',()=>{
      let formattedTitle = formatTitle(testData.title)
      expect(typeof formattedTitle).toBe('string')
      
    })
    test('Should format title correctly',()=>{
      let formattedTitle = formatTitle(testData.title)
      expect(formattedTitle).toBe('Nulla Ac')
      
    })
  })
  describe('shortenbio tests',()=>{
    let shortBio = shortenBio(testData.bio)
    test('shortbio will return smaller string',()=>expect(shortBio.length).toBeLessThan(testData.bio.length))
    test('shortbio should add ... to the end of line',()=>expect(shortBio).toContain('...'))})
  describe('convertlength tests',()=>{
    let result = convertLength(testData.length)
    let resulttw = convertLength(40)
    test('convert length should return a array wirh 2 elemnts',()=>expect(result.length).toBe(2))
    test('convert length can handle numbers over 60',()=>expect(resulttw[1]).toEqual(40))
  
  })
