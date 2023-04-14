export function NewPost () {
  return (
    <section className='newpost'>
      <form className='newpost-form'>
        <div className='newpost-form-wrapper'>
          <img src='https://ox.pe/wp-content/uploads/2019/10/Kawaii-00-1024x576.jpg' alt='' />
          <label style={{ display: 'block', width: '64px', height: '64px', cursor: 'pointer' }} htmlFor='fileInputPost'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
            </svg>
          </label>
          <input type='file' id='fileInputPost' style={{ display: 'none' }} />
          <input className='writingInput' type='text' placeholder='Título' autofocus />
          <textarea className='writingInput writingDesc' placeholder='¿Qué deseas escribir?' />
          <button type='submit'>
            Publicar
          </button>
        </div>
      </form>
    </section>
  )
}
