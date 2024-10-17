import Image from "next/image";
import {useRouter} from 'next/router' ; 



export default function Home() {

  const router = useRouter() ; 

  const {id} = router.query; 


  return (
      <div>

        <h1>Profil de l'utilisateur : {id}</h1>
      </div>

  )
}
