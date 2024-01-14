import './App.css'

function App() {

  return (
    <>
    <header className='d-flex justify-content-between align-items-center'>
      
      <div className='d-flex align-items-center'>
        <img className='ms-3 img-fluid w-25' src="/assets/img/yu-gi-oh-logo.png" alt="" />
        <h1 className=' text-white'>YU-GI-OH API</h1>
      </div>

      <select className='me-3 form-select w-25' name="archetypes" id="">
        <option value="0">seleziona</option>
        <option value="0">hero</option>
        <option value="0">hero2</option>
      </select>
    </header>
    <main></main>
    </>
  )
}

export default App
