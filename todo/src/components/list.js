export default function List({data}){
    console.log('data',data)
    return(
        <>
            {
                data.map((x, index)=>(
                    <>
                    <li key={index} style={{listStyle:'none'}}> {x}</li>
                    </>
                ))
            }
        </>
    )
}