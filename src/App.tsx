import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TransportWebUSB from '@ledgerhq/hw-transport-webusb'
import {AppClient} from 'ledger-bitcoin'

function App() {

  const handleClick = async () => {
    console.log('handle click')
    const transport = await TransportWebUSB.create();
    console.log('TransportWebUSB.create() - created');
    const app = new AppClient(transport);
    const masterFingerprint = await app.getMasterFingerprint();
    await transport.close();
    console.log('TransportWebUSB.close() - closed', masterFingerprint);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          TransportWebUSB.create()
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
