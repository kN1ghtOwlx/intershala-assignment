import axios from 'axios'

export const getInternships = async () => {
  const res = await axios.get('https://internshala.com/hiring/search')
  const data = res.data

  return data.internship_ids.map((id) => data.internships_meta[id])
}
