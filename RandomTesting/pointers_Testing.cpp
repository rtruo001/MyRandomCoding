#include <iostream>

using namespace std;

void reverse(char *str)
{
    char *end = str;
    cout << str << endl;
    cout << end << endl;
    cout << *end << endl;
    end++;
    cout << *end << endl;
    end++;
    cout << *end << endl;
    end++;
    cout << *end << endl;
    end++;
    cout << *end << endl;
}

int main()
{
    char str[] = "abc\0";
    reverse(str);
    return 0;
}
