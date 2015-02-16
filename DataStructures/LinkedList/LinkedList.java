public class LinkedList{

	public MyNode head;

	public LinkedList(){
		System.out.println("In Constructor of LinkedList");
		head = null;
	}

	public void pushBack(int data) {
		if (head == null) {
			head = new MyNode(data);
			head.next = null;
			return;
		}

		MyNode curr = head;
		while (curr.next != null) {
			curr = curr.next;
		}
		curr.next = new MyNode(data);
		System.out.println("Pushing back " + data);
	}

	public void printAllValuesInList() {
		int element = 0;
		if (head == null) {
			System.out.println("List is empty");
			return;
		}

		System.out.println("Element " + element + ": " + head.data);
		MyNode curr = head;
		while (curr.next != null) {
			++element;
			curr = curr.next;
			System.out.println("Element " + element + ": " + curr.data);
		}
	}
}