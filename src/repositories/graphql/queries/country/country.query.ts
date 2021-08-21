import { gql } from '@apollo/client'

export const COUNTRY_QUERY = gql`
  query($countryCode: ID!) {
    country(code: $countryCode) {
      code
      name
    }
  }
`

export type CountryData = {
  country: CountryParamsType
}
