public class Main {

	public static void main(String args[]) {
		System.out.println("In Main of Main.java");
		LinkedList list = new LinkedList();
		list.pushBack(4);
		list.pushBack(12);
		list.printAllValuesInList();
		list.pushBack(12);
		list.pushBack(3);
		list.printAllValuesInList();
	}
}