import { Square } from "./Square"


export function WinnerModal ({winner , resetGame}) {

   if (winner === null) return null
   const winnertest = winner === false ? 'Empate' : "gano"

   
    return (
        <section className="winner">
      <div className="text">
        <h2>{winnertest}
        </h2>

        <header className="win">
        {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>

      </div>
    </section> 
    )

    }