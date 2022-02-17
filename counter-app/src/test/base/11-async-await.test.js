import getImage from "../../base/11-async-await";

describe('Test to fetch data with asyn/await', () => {

  test('should return url', async () => {
    const url = await getImage()
    expect(url.includes('https://')).toBe(true)
  })

  test('should return error', async () => {
    const error = await getImage();
    expect(error).toBe('No existe')
  })
})