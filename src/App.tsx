import '@mantine/core/styles.css';
import { Button, MantineProvider, Menu, Modal, Tabs, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { theme } from './theme';

const MyDemo = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const modal = (
    <Modal opened={opened} onClose={close} title="hi" size="xl">
      <Tabs defaultValue="t1">
        <Tabs.List>
          <Tabs.Tab value="t1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="t2">Tab 2</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="t1">Tab 1</Tabs.Panel>
        <Tabs.Panel value="t2">Tab 2</Tabs.Panel>
      </Tabs>
    </Modal>
  );

  return (
    <>
      <Text>Bug is reproducible only in Firefox</Text>
      <Menu shadow="md" width={350} position="bottom-end">
        <Menu.Target>
          <Button variant="subtle">Magic menu</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Section</Menu.Label>
          <Menu.Item onClick={() => open()}>Open!</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      {modal}
    </>
  );
};

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <MyDemo />
    </MantineProvider>
  );
}
