package MainProgram;
import MisClases.Perro; // necesario para poder acceder a la clase Perro

public final class Main {

	public static void main(String[] args) {
		
		System.out.println("Comienzo del Programa. Estamos en la clase Main, dentro del método \"public static void main(...)\"");
		
		// Declaración 
		Perro p; // variable de tipo Perro
		
		// Instanciación del objeto
		p = new Perro(); // instanciamos un objeto Perro invocando al constructor
		
		// Asignación de atributos
		p.setNombre("Rodolfo");
		p.setRaza("Pastor Belga");
		
		// Acceso a los atributos a través de Propiedades
		System.out.println(
				"Nombre: " + p.getNombre() + 
				"\nRaza: " + p.getRaza()
		);

		// Invocación de Métodos
		p.Ladrar(); // invocación de un método que no devuelve ningún valor
		String resultado = p.Correr(); // invocación de un método que devuelve un valor de tipo String
		System.out.println(resultado); //mostramos el valor devuelto por el método Correr()
		
		System.out.println("------------------------------------------------------------------------------");
		
		// Ahora vamos a utilizar una forma más corta para realizar los pasos anteriores:
		// Declaración, Instanciación y Asignación en la misma sentencia
		Perro p1 = new Perro("Branca","Dogo Argentino"); // utilizamos el constructor sobrecargado para asignar valores

		// Y accedemos a los atributos y métodos de p1
		System.out.println(
				"Nombre: " + p1.getNombre() + 
				"\nRaza: " + p1.getRaza()
		);
		p1.Ladrar();
		System.out.println(p1.Correr());
	}

}
