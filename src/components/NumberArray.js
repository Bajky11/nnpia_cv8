export default function NumberList() {
    const numbers = [1, 2, 3, 4, 5];
  
    return (
      <table>
        <tbody>
          {numbers.map((number) => (
            <tr key={number}>
              <td>{number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }