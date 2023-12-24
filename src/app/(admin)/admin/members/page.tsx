
import { ManageUsers } from "@/components/admin"
import { BASE_API_URL } from "@/utils/constants"

const getAllUsers = async () => {
  
    const res = await fetch(`${BASE_API_URL}/api/v1/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
  
    // if (!res.ok) {
    //   throw new Error("Error fetching Users")
    // }

    const data = await res.json()
    return data
}

export default async function ManageMembers() {
  const data = await getAllUsers()

  console.log(data.data)

  return (
    <main className="p-5">
      <ManageUsers users={data.data} />
    </main>
  )
}
