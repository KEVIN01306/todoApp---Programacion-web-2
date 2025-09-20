
import Header from './components/Header'
import TodoList from './components/TodoList'


function App() {

  return (
    <>
      <Header/>

    <div className='container d-flex justify-content-center align-items-center flex-column'>
      <TodoList/>
    </div>
    </>
  )
}

export default App
