import { baseUrl, options } from "./api"

export const validatePhoneNumber = async (
    number: string,
) : Promise<{country?: string, message: string} | null> => {
    try {
        const data = await fetch(`${baseUrl}?number=%2B${number}&country=UY`, options)
        const res = await data.json()

        if (data.status === 200) {
           if (!res.isPossibleNumber) {
            return {
                message: 'Указанный номер не существует'
            }
           }
          
            return {
              country: res.location,
              message: 'Вы можете оформить заказ на указанный номер'
            }
          }
          return  {
            message: 'Номер введен некорректно'
          }
    } catch (err) {
        return  {
            message: 'Номер введен некорректно'
          }
    }
}