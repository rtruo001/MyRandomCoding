#include <iostream>

using namespace std;

void reverse(char *str) {
    cout << "Currently in reverse(char *) to reverse: " << str << endl;
    char *end = str;
    char temp;

    while (*end){
        ++end;
    }
    --end;

   while (str < end) {
        temp = *str;
        *str = *end;
        *end = temp;
        ++str;
        --end;
   } 
   cout << "Reversed String: " << str << endl;
}

int main(int argc, char *argv[]) {  
    if (argc != 2){
        cout << "Please input 2 arguments in this format: ./a.out <String>" << endl;
        return -1;
    }

    cout << "Reversing string: " << argv[1] << endl; 
    char *str = argv[1];
    reverse(str);
    cout << "Reversed String: " << str << endl;
    return 0;
}
