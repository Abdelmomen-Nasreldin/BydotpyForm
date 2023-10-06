
const StepTwoForm =({next, back}: {next: ()=>void, back: ()=>void} ) => {
  return (
    <form className='h-[50vh]  text-white'>
      <button className='px-5 py-3 m-2 rounded w-full bg-primary' type="button" onClick={back}>Previous</button>
      <button className='px-5 py-3 m-2 rounded w-full bg-primary' type="button" onClick={next}>Next</button>
    </form>
  )
}

export default StepTwoForm