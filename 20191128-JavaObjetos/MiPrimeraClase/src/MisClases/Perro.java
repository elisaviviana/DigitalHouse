package MisClases;

public class Perro {
		
	// Atributos
	private String nombre; // nota: siempre los tenemos que declarar de forma privada
	private String raza;
	
	// Propiedades getters & setters (son métodos que permiten acceder desde el exterior a los atributos de la clase)
	public String getNombre() { // permite leer el valor del atributo nombre
		return this.nombre;
	}
	public void setNombre(String nombre) { //permite asignar un valor al atributo nombre
		this.nombre = nombre;
	}
	public String getRaza() {  // permite leer el valor del atributo raza
		return this.raza;
	}
	public void setRaza(String raza) { //permite asignar un valor al atributo raza
		this.raza = raza;
	}
	
	// Constructor
	public Perro() {
		// nota: este es un constructor vacío. Permite instanciar un objeto de tipo perro.
	}
	
	// Constructor sobrecargado
	public Perro(String nom, String raz) { 
		// nota: este es un constructor "sofisticado", ya que permite asignar valores a los atributos del objeto al momento de su instanciación
		this.nombre = nom;
		this.raza = raz;
	}
	
	// Métodos
	public void Ladrar() {
		System.out.println("Wof Woof Wooof... (el perro está ladrando).");
		//nota: este método no devuelve ningún valor, sólo ejecuta un código y termina.
	}
	
	public String Correr() {
		return "El perro está corriendo...";
		// nota: este método devuelve un valor de tipo String
	}
	
} // end class
