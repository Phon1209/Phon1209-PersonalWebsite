Today I had a chance to install OpenMediaVault for my friend. Installing it on Raspberry Pi is an interesting experience as it’s quite inflexible and hard to get it right.

Some quirks I found(**that costs me hours**):

- Cannot use the Boot partition as the storage even though I partitioned them.
- OMV7 don’t support Raspbian13 (Trixie), but supports Raspbian12(Bookworm)
- It can actually read disk from `sda` (external disk)

<aside> 💡

So..

Boot and install it on a SD card, use **empty** SSD either external or with a NVME HAT.

</aside>

Once the disk is empty, we can set up a shared folder on those empty disk, then set the SMB and NFS protocol to both support Unix and Window.

For window, we can use `smb` protocol to connect to the shared folder set in the OMV. Then the shared folder will act as a NAS.

For some reason, mac does use `smb` protocol rather than `nfs`. But it’s fine as well.