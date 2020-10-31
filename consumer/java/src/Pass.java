public class Pass implements Lockable{
    private int k;
    private int setKey;
    private boolean locked;

    public Pass(int key){
        k=key;
        locked=false;
    }
    public void setKey(int newKey) {
        if (!locked) {
            setKey = newKey;
            System.out.println(newKey + " set as a new key successfully\n");
        }
        else{
            System.out.println("Pass is already Locked with another key\n");
        }
    }
    public void lock(int key){
        if (key==setKey ){
            locked=true;
            System.out.println("Key matched, Locked successfully\n");
        }
        else{
            System.out.println("Key not matched, Locked Failed\n");

        }
    }
    public void unlock(int key){
        if (key==setKey && locked){
            System.out.println("Key matched, UnLocked successfully\n");
            locked=false;
        }
        else{
            System.out.print("unLocked Failed, because ");
            if (!locked){
                System.out.println("Already unLocked\n");
            }
            else{
                System.out.println("key not matched\n");
            }
        }
    }

    @Override
    public boolean locked()
    {
        System.out.println("Locked Status is: "+locked+'\n');
        return locked;
    }

    @Override
    public String toString() {
        if (locked)
            return "Pass is Locked\n\n";
        else
            return "Pass is Unlocked\n\n";
    }
}
